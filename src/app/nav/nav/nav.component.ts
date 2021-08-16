import { Component } from '@angular/core';
import { UserService } from '../../user/user.service';
import { BehaviorSubject } from 'rxjs';
import { Me } from '@dwn/models';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  navbarCollapsed = true;
  me$: BehaviorSubject<Me>;
  isProd = true;

  constructor(
    public userService: UserService
  ) {
    this.me$ = userService.me$;
    this.isProd = environment.production;
  }
}
