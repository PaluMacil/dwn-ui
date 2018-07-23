import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SecurityComponent } from './security/security.component';
import { ReactiveFormsModule } from '@angular/forms'
import { AccountRoutingModule } from './account-routing/account-routing.module';
import { AccountComponent } from './account/account.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    ProfileComponent, 
    SecurityComponent,
    AccountComponent
  ]
})
export class AccountModule { }
