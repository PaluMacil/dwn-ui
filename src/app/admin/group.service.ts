import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Group } from '../shared/models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  groups(): Observable<Group[]> {
    return this.http.get<Group[]>('api/group/all')
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
}
