import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Me, IMe } from '../shared/models/me';
import { User } from '../shared/models/user';
import { LoginService } from './login.service';
import { SessionDetails } from '../shared/models/session-details';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private login: LoginService
  ) { }

  private _me: Me;

  me(force?: false): Observable<Me> {
    if (force || !this._me) return this.http.get<IMe>('api/user/me').pipe(
      catchError(e => {
        this.login.logout(false)
        return of(e)
      }),
      map(m => {
        this._me = new Me(m.user, m.session, m.groups);
        return this._me;
      })
    );
    return of(this._me);
  }

  all(): Observable<User[]> {
    return this.http.get<User[]>('api/user/all');
  }

  sessions(includeInactive = false): Observable<SessionDetails[]> {
    const params = new HttpParams()
      .set('includeInactive', includeInactive.toString());
    return this.http.get<SessionDetails[]>(`api/user/sessions`, { params });
  }
}
