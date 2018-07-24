import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
