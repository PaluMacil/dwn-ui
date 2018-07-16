import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrayComponent } from './tray/tray.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserRoutingModule } from './user-routing/user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    UserRoutingModule
  ],
  declarations: [
    TrayComponent,
    ProfileButtonComponent
  ],
  exports: [
    TrayComponent
  ]
})
export class UserModule { }

export function userEntrypoint() {
  return UserModule;
}