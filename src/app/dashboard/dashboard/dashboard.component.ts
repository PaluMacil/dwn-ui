import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Project } from '../project/project.component';
import { first } from 'rxjs/operators';

export interface Dashboard {
  Projects: Array<Project>;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard: Dashboard = { Projects: [] };

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.dashboard().pipe(first()).subscribe(
      (dashboard) => this.dashboard = dashboard
    );
  }

}
