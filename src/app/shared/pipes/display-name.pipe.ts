import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { single, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Pipe({
  name: 'displayName$'
})
export class DisplayNamePipe implements PipeTransform {
  constructor(private userService: UserService) { }

  transform(value: unknown, ...args: Array<unknown>): Observable<string> | null {
    if (typeof value === 'number') {
      return this.userService.displayNames([value])
        .pipe(
          single(),
          map((lookup) => lookup[value])
        );
    }
    return null;
  }

}
