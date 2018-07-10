import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrayComponent } from './tray/tray.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrayComponent],
  exports: [
    TrayComponent
  ]
})
export class UserModule { }
