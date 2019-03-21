import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ShoppingItem } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<ShoppingItem[]>(`api/shopping/list`);
  }

  add(item: ShoppingItem) {
    return this.http.post<ShoppingItem>(`api/shopping/item`, item);
  }

  remove(name: string) {
    const params = new HttpParams()
      .set('name', name);
    return this.http.delete<void>(`api/shopping/item`, {params});
  }
}
