import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, retry, map } from 'rxjs/operators';
import {
  Me, IMe, UserInfo, SessionDetails,
  UserCreationRequest, VerificationRequest,
  LoginRequest, LoginResultMessage
} from '../shared/models';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ANONYMOUS_USER } from '../shared/builtins';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  me$ = new BehaviorSubject<Me>(ANONYMOUS_USER);

  checkMe(): void {
    const token = environment.tokenName;
    if (!localStorage.getItem(token)) {
      // not logged in
      this.me$.next(ANONYMOUS_USER);
      return;
    }
    // has a token, so check it
    this.http.get<IMe>('/api/core/sessions/me').pipe(
      tap({
        next: (m) => {
          // authenticated; construct and emit new Me
          const me = new Me(m.user, m.session, m.groups, true);
          this.me$.next(me);
        },
        error: () => {
          // failed to get me, log out
          this.logout(false);
        }
      })
    ).subscribe();
  }

  displayNames(userIDs: Array<number>): Observable<Map<number, string>> {
    const nameMap = new Map<number, string>();
    for (const id of userIDs) {
      nameMap.set(id, '');
    }
    const uniqueIDs = Array.from(nameMap.keys());
    const params = new HttpParams()
      .set('ids', Array.from(uniqueIDs).join(','));
    return this.http.get<{ [key: string]: string }>('api/core/users/displayname', { params })
      .pipe(
        map(val => {
          for (const id of uniqueIDs) {
            nameMap.set(id, val[id]);
          }
          return nameMap;
        })
      );
  }

  verifyUserEmail(userID: number, email: string): Observable<UserInfo> {
    const verificationRequest: VerificationRequest = {
      userID, email
    };
    return this.http.post<UserInfo>('api/registration/verify', verificationRequest);
  }

  setLockedStatus(userID: number, locked: boolean): Observable<void> {
    return this.http.put<void>('api/core/users/locked', {userID, status: locked});
  }

  setDisabledStatus(userID: number, disabled: boolean): Observable<void> {
    return this.http.put<void>('api/core/users/disabled', {userID, status: disabled});
  }

  createUser(request: UserCreationRequest): Observable<UserInfo> {
    return this.http.post<UserInfo>('api/registration/user', request);
  }

  login(credentials: LoginRequest): Observable<LoginResultMessage> {
    return this.http.post<LoginResultMessage>('api/core/sessions/login', credentials);
  }

  userSuggestion(query: string): Observable<UserInfo[]> {
    // check if query is a tag, and remove ampersand to allow backend
    // to search both as a general term and as tag.
    if (query.startsWith('@')) {
      query = query.slice(1);
    }
    const params = new HttpParams()
      // search is is indexed by lowercase terms
      .set('query', query.toLowerCase());
    return this.http.get<UserInfo[]>(`api/typeahead/users`, { params });
  }

  all(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>('api/core/users');
  }

  sessions(includeInactive = false): Observable<SessionDetails[]> {
    const params = new HttpParams()
      .set('includeInactive', includeInactive.toString());
    return this.http.get<SessionDetails[]>(`api/core/sessions`, { params });
  }

  deleteUser(id: number): Observable<boolean> {
    const params = new HttpParams()
      // search is is indexed by lowercase terms
      .set('id', String(id));
    return this.http.delete<boolean>(`/api/core/users`, { params });
  }

  // TODO: determine if default should be true
  logout(notifyServer = false): void {
    const token = environment.tokenName;
    if (token in localStorage) {
      if (notifyServer) {
        this.http.delete(`/api/core/sessions/${this.getToken()}`).pipe(retry(2)).subscribe();
      }
      localStorage.removeItem(token);
    }
    this.me$.next(ANONYMOUS_USER);
    this.router.navigate(['/']);
  }

  getToken(): string {
    return localStorage.getItem(environment.tokenName);
  }
}
