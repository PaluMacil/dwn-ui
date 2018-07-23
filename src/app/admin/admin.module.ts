import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { UserModule } from '../user/user.module';
import { AdminSiteInfoComponent } from './admin-site-info/admin-site-info.component';
import { AdminGroupManagementComponent } from './admin-group-management/admin-group-management.component';
import { AdminSessionManagementComponent } from './admin-session-management/admin-session-management.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent, 
    SetPasswordComponent,
    AdminSiteInfoComponent,
    AdminGroupManagementComponent,
    AdminSessionManagementComponent
  ]
})
export class AdminModule { }

export function adminEntrypoint() {
  return AdminModule
}