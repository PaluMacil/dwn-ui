import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { PageComponent } from '../page/page.component';
import { userEntrypoint } from '../user/user.module';
import { adminEntrypoint } from '../admin/admin.module';

const routes: Routes = [
  {
    path: 'page/:slug',
    component: PageComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user',
    loadChildren: userEntrypoint
  },
  {
    path: 'admin',
    loadChildren: adminEntrypoint
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }