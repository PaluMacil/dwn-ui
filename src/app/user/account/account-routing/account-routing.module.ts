import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from '../account/account.component';

const accountOutlet = 'account';

const routes: Routes = [
  {
    path: ':tab',
    component: AccountComponent
  },
  {
    path: '',
    component: AccountComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
