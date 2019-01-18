import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrayComponent } from './tray/tray.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserManagementComponent } from './user-management/user-management.component';
import { TrayActionListComponent } from './tray-action-list/tray-action-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [
    TrayComponent,
    ProfileButtonComponent,
    UserManagementComponent,
    TrayActionListComponent
  ],
  exports: [
    TrayComponent, TrayActionListComponent, UserManagementComponent
  ]
})
export class UserModule { }
