import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { map, first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Pipe({
  name: 'displayName$'
})
export class DisplayNamePipe implements PipeTransform {
  constructor(private userService: UserService) { }

  transform(value: unknown): Observable<string> | null {
    const numValue = value as number;
    return this.userService.displayNames([numValue])
      .pipe(
        map((lookup) => lookup.get(numValue) ?? `user #${String(value)}`),
        first()
      );
  }
}
