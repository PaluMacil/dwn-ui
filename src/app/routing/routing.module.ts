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
import { RegistrationComponent } from '../user/registration/registration.component';


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
    loadChildren: () => import('../user/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'register',
    component: RegistrationComponent
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
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
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
