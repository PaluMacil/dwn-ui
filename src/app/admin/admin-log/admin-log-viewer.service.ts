import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class AdminLogViewerService {
  private socket: WebSocketSubject<string>;

  constructor() {
    // TODO: move to a method where you connect so that reconnecting is also possible
    this.socket = new WebSocketSubject<string>(`wss://${location.host}/log`);
  }
}
