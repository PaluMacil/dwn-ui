import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { share, map } from 'rxjs/operators';
import { Me, IMe } from '../shared/models/me';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  me() : Observable<Me> {
    return this.http.get<IMe>('api/user/me').pipe(map(m => {
      return new Me(m.user, m.session, m.groups);
    }));
  }
}
