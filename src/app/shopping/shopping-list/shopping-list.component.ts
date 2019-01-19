import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../../shared/models/shopping-item';
import { ShoppingService } from '../shopping.service';
import { FormBuilder, Validators, AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  shoppingList: ShoppingItem[];
  itemComplete = faCheck;
  itemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shoppingService: ShoppingService
  ) {
    this.shoppingList = new Array<ShoppingItem>();
  }

  add() {
    const newItem = this.itemForm.value as ShoppingItem;
    this.shoppingService.add(newItem).subscribe(
      item => this.shoppingList.push(item)
    );
  }

  remove(name: string) {
    this.shoppingService.remove(name).subscribe(
      () => this.shoppingList = this.shoppingList.filter(i => i.name !== name)
    );
  }

  refresh() {
    this.shoppingList.length = 0;
    this.shoppingService.list().subscribe(
      items => this.shoppingList.push(...items)
    );
  }

  itemNotListedValidator(shoppingList: ShoppingItem[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const t = control.parent;
      if (shoppingList.filter(i => i.name.toLowerCase() === control.value.toLowerCase()).length > 0) {
        return { 'itemNotListed': true };
      }
      return null;
    };
  }

  ngOnInit() {
    this.itemForm = this.fb.group({
      name: ['', [Validators.required, this.itemNotListedValidator(this.shoppingList)]],
      quantity: [0],
      note:  ['']
    });
    this.refresh();
  }
}
