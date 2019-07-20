import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group, GroupDisplay, UserInfo, UserGroup, GroupCreationRequest } from '../shared/models';
import { map, flatMap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  groups(): Observable<GroupDisplay[]> {
    return this.http.get<Group[]>('api/core/groups')
      .pipe(
        flatMap( groups => {
          const ids = groups.map(g => g.modifiedBy);
          return this.userService.displayNames(ids)
            .pipe(map((displayNameLookup) => ({groups, displayNameLookup})));
        }),
        map(({groups, displayNameLookup}) => {
          const groupDisplays = new Array<GroupDisplay>();
          for (const group of groups) {
            const groupDisplay: GroupDisplay = {
              ...group,
              modifiedByDisplayName: displayNameLookup.get(group.modifiedBy)
            };
            groupDisplays.push(groupDisplay);
          }
          return groupDisplays;
        })
      );
  }

  groupsFor(id: number) {
    return this.http.get<Group[]>(`api/core/usergroups/groups-for/${id}`);
  }

  usersFor(groupName: string) {
    return this.http.get<UserInfo[]>(`api/core/usergroups/members-of/${encodeURIComponent(groupName)}`);
  }

  addUser(id: number, groupName: string) {
    return this.http.post<UserGroup>('api/core/usergroups', { userID: id, groupName });
  }

  removeUser(id: number, groupName: string) {
    const params = new HttpParams()
      .set('userID', String(id))
      .set('group', groupName);
    return this.http.delete<UserGroup>('api/core/usergroups', { params });
  }

  addPermission(groupName: string, permission: string) {
    const params = new HttpParams()
      .set('permission', permission)
      .set('group', groupName);
    return this.http.put<Group>('api/core/permissions', {}, { params });
  }

  removePermission(groupName: string, permission: string) {
    const params = new HttpParams()
      .set('permission', permission)
      .set('group', groupName);
    return this.http.delete<Group>('api/core/permissions', { params });
  }

  create(group: GroupCreationRequest) {
    return this.http.post<Group>('api/core/groups', group);
  }
}
