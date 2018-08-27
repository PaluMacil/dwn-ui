import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingRoutingModule } from './shopping-routing/shopping-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    ShoppingRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ShoppingListComponent
  ]
})
export class ShoppingModule { }

export function shoppingEntrypoint() {
  return ShoppingModule
}