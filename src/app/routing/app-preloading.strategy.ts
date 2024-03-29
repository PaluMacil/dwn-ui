import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppPreloadingStrategy implements PreloadingStrategy {
  // Load only if the route has data, and that data has Preload, and Preload is a truthy
  public preload = (route: Route, load: () => Observable<any>): Observable<any> =>
    (route.data && route.data.Preload)
      ? load()
      : of(null)
}
