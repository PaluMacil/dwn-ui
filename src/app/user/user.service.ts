import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { map, tap, share, retry } from 'rxjs/operators';
import { Me, IMe, User, SessionDetails } from '../shared/models';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private _me: Me;

  me(force?: false): Observable<Me> {
    if (force || !this._me) { return this.http.get<IMe>('api/user/me').pipe(
      tap({ error: () => this.logout(false) }),
      map(m => {
        this._me = new Me(m.user, m.session, m.groups, true);
        return this._me;
      })
    );
    }
    return of(this._me);
  }

  userSuggestion(query: string): Observable<User[]> {
    // check if query is a tag, and remove ampersand to allow backend
    // to search both as a general term and as tag.
    if (query.startsWith('@')) {
      query = query.slice(1);
    }
    const params = new HttpParams()
      .set('query', query);
    return this.http.get<User[]>(`api/typeahead/user`, { params });
  }

  all(): Observable<User[]> {
    return this.http.get<User[]>('api/user/all');
  }

  sessions(includeInactive = false): Observable<SessionDetails[]> {
    const params = new HttpParams()
      .set('includeInactive', includeInactive.toString());
    return this.http.get<SessionDetails[]>(`api/user/sessions`, { params });
  }

  loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  isLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable().pipe(share());
  }

  logout(notifyServer = false): void {
    if (environment.tokenName in localStorage) {
      if (notifyServer) {
        this.http.delete(`/api/user/logout/${this.getToken()}`).pipe(retry(2)).subscribe();
      }
      localStorage.removeItem(environment.tokenName);
    }
    this.loggedInSubject.next(false);
    this.router.navigate(['/']);
  }

  getToken(): string {
    return localStorage.getItem(environment.tokenName);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(environment.tokenName);
  }
}
