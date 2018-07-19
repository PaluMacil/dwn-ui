import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    NgbModule
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
