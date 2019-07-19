import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group, UserInfo, UserGroup, GroupCreationRequest } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  groups(): Observable<Group[]> {
    return this.http.get<Group[]>('api/core/groups');
  }

  groupsFor(id: number) {
    return this.http.get<Group[]>(`api/core/usergroups/groups-for/${id}`);
  }

  usersFor(groupName: string) {
    return this.http.get<UserInfo[]>(`api/core/usergroups/members-of/${encodeURIComponent(groupName)}`);
  }

  addUser(id: number, groupName: string) {
    return this.http.post<UserGroup>('api/core/usergroups', {userID: id, groupName});
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
