import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { UserModule } from '../user/user.module';
import { AdminSiteInfoComponent } from './admin-site-info/admin-site-info.component';
import { AdminGroupManagementComponent } from './admin-group-management/admin-group-management.component';
import { AdminSessionManagementComponent } from './admin-session-management/admin-session-management.component';
import { PermissionSelectorComponent } from './permission-selector/permission-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupUserSelectorComponent } from './group-user-selector/group-user-selector.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AdminLogComponent } from './admin-log/admin-log.component';
import { NgxFilesizeModule } from 'ngx-filesize';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminSmtpComponent } from './admin-smtp/admin-smtp.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { SharedModule } from '@dwn/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    NgxFilesizeModule,
    NgbModule,
    FontAwesomeModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    SetPasswordComponent,
    AdminSiteInfoComponent,
    AdminGroupManagementComponent,
    AdminSessionManagementComponent,
    PermissionSelectorComponent,
    GroupUserSelectorComponent,
    AdminLogComponent,
    AdminSmtpComponent,
    AdminAuthComponent
  ]
})
export class AdminModule { }
