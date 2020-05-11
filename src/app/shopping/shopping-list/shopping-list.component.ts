import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingItem } from '@dwn/models';
import { ShoppingService } from '../shopping.service';
import { FormBuilder, Validators, AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ExportToCsv } from 'export-to-csv';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  shoppingList: Array<ShoppingItem>;
  itemComplete = faCheck;
  itemForm: FormGroup;

  csvFile: File;
  @ViewChild('csvFileInput') csvFileInput: ElementRef;

  constructor(
    private fb: FormBuilder,
    private shoppingService: ShoppingService
  ) {
    this.shoppingList = new Array<ShoppingItem>();
  }

  add(): void {
    const newItem = this.itemForm.value as ShoppingItem;
    this.shoppingService.add(newItem).subscribe(
      (item) => {
        this.shoppingList.push(item);
        this.itemForm.reset();
      }
    );
  }

  remove(name: string): void {
    this.shoppingService.remove(name).subscribe(
      () => this.shoppingList = this.shoppingList.filter((i) => i.name !== name)
    );
  }

  refresh(): void {
    this.shoppingList.length = 0;
    this.shoppingService.list().subscribe(
      (items) => this.shoppingList.push(...items)
    );
  }

  itemNotListedValidator(shoppingList: Array<ShoppingItem>): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const newItemName = typeof (control.value) === 'string' ? control.value.toLowerCase() : '';
      // is the item already in the list?
      if (shoppingList.filter((i) => i.name.toLowerCase() === newItemName).length > 0) {
        return { 'itemNotListed': true };
      }
      return null;
    };
  }

  export(): void {

    const data = this.shoppingList.map((i) => {
      return {
        name: i.name,
        note: i.note,
        quantity: i.quantity
      };
    });

    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: false,
      showTitle: false,
      title: '',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };

    const csvExporter = new ExportToCsv(options);

    const csv = csvExporter.generateCsv(data);
    console.log(csv);
  }

  import(): void {
    this.shoppingService.import(this.csvFile).pipe(first()).subscribe((items) => {
      this.shoppingList.push(...items);
      this.csvFile = undefined;
      this.csvFileInput.nativeElement.value = null;
    });
  }

  onFileChange(event: Event): void {
    this.csvFile = (event.target as HTMLInputElement).files[0];
  }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: ['', [Validators.required, this.itemNotListedValidator(this.shoppingList)]],
      quantity: [0],
      note: ['']
    });
    this.refresh();
  }
}
