import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Me, IMe } from '../shared/models/me';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private _me: Me;

  me(force?: false) : Observable<Me> {
    if (force || !this.me) return this.http.get<IMe>('api/user/me').pipe(map(m => {
      this._me = new Me(m.user, m.session, m.groups);
      return this._me;
    }));
    return of(this._me);
  }

  all(): Observable<User[]> {
    return this.http.get<User[]>('api/user/all');
  }
}
