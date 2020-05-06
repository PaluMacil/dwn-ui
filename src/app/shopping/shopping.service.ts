import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ShoppingItem } from '../shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<ShoppingItem[]>(`api/shopping/items`);
  }

  add(item: ShoppingItem) {
    return this.http.post<ShoppingItem>(`api/shopping/items`, item);
  }

  remove(name: string) {
    const params = new HttpParams()
      .set('name', name);
    return this.http.delete<void>(`api/shopping/items`, {params});
  }

  import(file: File): Observable<Array<ShoppingItem>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<Array<ShoppingItem>>('api/shopping/items/csv', formData);
  }
}
