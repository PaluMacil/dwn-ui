import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    FontAwesomeModule
  ]
})
export class DashboardModule { }
