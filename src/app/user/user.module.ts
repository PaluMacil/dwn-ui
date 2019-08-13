import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrayComponent } from './tray/tray.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserManagementComponent } from './user-management/user-management.component';
import { TrayActionListComponent } from './tray-action-list/tray-action-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserConfirmDeleteComponent } from './user-confirm-delete/user-confirm-delete.component';
import { EmailManagementComponent } from './email-management/email-management.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([]),
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [
    TrayComponent,
    ProfileButtonComponent,
    UserManagementComponent,
    TrayActionListComponent,
    RegistrationComponent,
    LoginComponent,
    UserConfirmDeleteComponent,
    EmailManagementComponent
  ],
  exports: [
    TrayComponent, TrayActionListComponent, UserManagementComponent
  ],
  entryComponents: [
    UserConfirmDeleteComponent
  ]
})
export class UserModule { }
