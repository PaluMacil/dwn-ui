import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { BehaviorSubject } from 'rxjs';
import { Me } from '../../shared/models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navbarCollapsed = true;
  me$: BehaviorSubject<Me>;

  constructor(
    public userService: UserService
  ) {
    this.me$ = userService.me$;
  }

  ngOnInit() {
  }

}
