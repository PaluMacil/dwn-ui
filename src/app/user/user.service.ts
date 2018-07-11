import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  meSubject = new BehaviorSubject<Me>(null);

  me() : Observable<Me> {
    return this.meSubject.asObservable().pipe(share());
  }
}

export interface User {
  google_id: string;
  google_import_date: Date;
  email: string;
  verified_email: boolean;
  locked: boolean;
  display_name: string;
  given_name: string;
  family_name: string;
  link: string;
  picture: string;
  gender: string;
  locale: string;
  last_login: Date;
  modified_date: Date;
  created_date: Date;
}

export interface Session {
  Token: string;
  Email: string;
  Created: Date;
  Heartbeat: Date;
}

export interface Me {
  User: User;
  Session: Session;
  Groups: any[];
}