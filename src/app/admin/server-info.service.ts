import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerInfo } from '@dwn/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  info(): Observable<ServerInfo> {
    return this.http.get<ServerInfo>('api/server/info');
  }

  permissions(): Observable<Array<string>> {
    return this.http.get<Array<string>>('api/core/permissions');
  }
}
