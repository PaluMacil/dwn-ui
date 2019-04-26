import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerInfo } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  info() {
    return this.http.get<ServerInfo>('api/server/info');
  }

  permissions() {
    return this.http.get<string[]>('api/core/permissions');
  }
}
