import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../user/login.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navbarCollapsed = true;

  constructor(
    public loginService: LoginService,
    public userService: UserService
  ) { }

  ngOnInit() {
  }

}
