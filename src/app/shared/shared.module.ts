import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayNamePipe } from './pipes/display-name.pipe';


@NgModule({
  declarations: [DisplayNamePipe],
  imports: [
    CommonModule
  ],
  exports: [DisplayNamePipe]
})
export class SharedModule { }
