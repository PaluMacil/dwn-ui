import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Group, UserInfo, UserGroup, GroupCreationRequest } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  groups(): Observable<Group[]> {
    return this.http.get<Group[]>('api/group/all');
  }

  groupsFor(email: string) {
    return this.http.get<Group[]>(`api/user/groups-for/${encodeURIComponent(email)}`);
  }

  usersFor(groupName: string) {
    return this.http.get<UserInfo[]>(`api/group/users-for/${encodeURIComponent(groupName)}`);
  }

  addUser(email: string, groupName: string) {
    return this.http.post<UserGroup>('api/usergroup/add', {email, groupName});
  }

  removeUser(email: string, groupName: string) {
    return this.http.post<UserGroup>('api/usergroup/remove', {email, groupName});
  }

  addPermission(groupName: string, permission: string) {
    const params = new HttpParams()
      .set('permission', permission);
    return this.http.put<Group>(`api/group/permission/${groupName}`, {}, { params });
  }

  removePermission(groupName: string, permission: string) {
    const params = new HttpParams()
      .set('permission', permission);
    return this.http.delete<Group>(`api/group/permission/${groupName}`, { params });
  }

  create(group: GroupCreationRequest) {
    return this.http.post<Group>('api/group', group);
  }
}
