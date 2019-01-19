import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { PageComponent } from '../page/page.component';
import { UserManagementComponent } from '../user/user-management/user-management.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { AdminModule } from '../admin/admin.module';
import { ShoppingListComponent } from '../shopping/shopping-list/shopping-list.component';
import { ShoppingModule } from '../shopping/shopping.module';
import { AppPreloadingStrategy } from './app-preloading.strategy';


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
    path: 'user/management',
    component: UserManagementComponent
  },
  {
    path: 'user/account',
    loadChildren: '../user/account/account.module#AccountModule'
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/:tab',
    component: AdminComponent
  },
  {
    path: 'policies/privacy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'shopping',
    component: ShoppingListComponent
  },
  {
    path: 'shopping/list',
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [
    AdminModule,
    ShoppingModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: AppPreloadingStrategy
    })
  ],
  exports: [RouterModule]
})
export class RoutingModule { }