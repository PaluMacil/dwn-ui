import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  isLoggedIn() : Observable<boolean> {
    return this.loggedInSubject.asObservable().pipe(share());
  }

  constructor(private http: HttpClient) { }

  logout(notifyServer = false) : void {
    if (environment.tokenName in localStorage){
      if (notifyServer) {
        this.http.delete(`/api/user/logout/${environment.tokenName}`);
      }
      localStorage.removeItem(environment.tokenName);
    }
    this.loggedInSubject.next(false);
  }

  getToken(): string {
    return localStorage.getItem(environment.tokenName);
  }

  private hasToken() : boolean {
    return !!localStorage.getItem(environment.tokenName);
  }
}
