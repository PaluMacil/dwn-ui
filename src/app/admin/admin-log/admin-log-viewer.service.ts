import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { LoginService } from '../../user/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLogViewerService {
  private socket: WebSocketSubject<string>;

  constructor(private loginService: LoginService) {
    // TODO: move to a method where you connect so that reconnecting is also possible
    this.socket = new WebSocketSubject<string>(`wss://${location.host}/log`);
  }
}
