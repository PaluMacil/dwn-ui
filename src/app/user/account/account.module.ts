import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SecurityComponent } from './security/security.component';
import { ReactiveFormsModule } from '@angular/forms'
import { AccountRoutingModule } from './account-routing/account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ],
  declarations: [
    ProfileComponent, 
    SecurityComponent
  ]
})
export class AccountModule { }
