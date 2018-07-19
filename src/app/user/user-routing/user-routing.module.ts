import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserManagementComponent } from '../user-management/user-management.component';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: '../account/account.module#AccountModule'
  },
  {
    path: 'management',
    component: UserManagementComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class UserRoutingModule { }

