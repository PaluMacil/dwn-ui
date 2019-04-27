import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Dashboard } from './dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  dashboard() {
    return this.http.get<Dashboard>('api/dashboard/board');
  }
}
