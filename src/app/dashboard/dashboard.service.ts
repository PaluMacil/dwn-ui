import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard } from './dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  dashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>('api/dashboard/board');
  }
}
