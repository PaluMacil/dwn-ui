import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ShoppingItem } from '@dwn/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Array<ShoppingItem>> {
    return this.http.get<Array<ShoppingItem>>(`api/shopping/items`);
  }

  add(item: ShoppingItem): Observable<ShoppingItem> {
    return this.http.post<ShoppingItem>(`api/shopping/items`, item);
  }

  remove(name: string): Observable<void> {
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
