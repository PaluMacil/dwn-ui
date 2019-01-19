import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerInfo } from '../shared/models/server-info';

@Injectable({
  providedIn: 'root'
})
export class ServerInfoService {

  constructor(private http: HttpClient) { }

  server() {
    return this.http.get<ServerInfo>('api/info/server');
  }

  permissions() {
    return this.http.get<string[]>('api/info/permissions');
  }
}
