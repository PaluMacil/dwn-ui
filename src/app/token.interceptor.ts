import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';
import { environment } from '../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public userService: UserService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const attachToken = ['danwolf.net', 'visit.danwolf.net', 'staging.danwolf.net']
      .some(url => url === location.host) || location.hostname === 'localhost';
    if (!attachToken) {
      return next.handle(request);
    }
    const tokenName = environment.tokenName;
    // Don't attach a null token
    const token = this.userService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          [tokenName]: `${token}`
        }
      });
    }
    return next.handle(request);
  }
}
