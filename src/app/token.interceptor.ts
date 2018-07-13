import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from './user/login.service'
import { environment } from '../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public ls: LoginService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const tokenName = environment.tokenName;
      request = request.clone({
        setHeaders: {
          [tokenName]: `${this.ls.getToken()}`
        }
      });
      return next.handle(request);
    }
  }
