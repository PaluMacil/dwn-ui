import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { Me } from '../../shared/models/me';
import { faSignInAlt, faBell } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-tray',
  templateUrl: './tray.component.html',
  styleUrls: ['./tray.component.scss']
})
export class TrayComponent implements OnInit {

  me: Me;

  iconSignIn = faSignInAlt;
  iconAlert = faBell;

  constructor(
    public loginService: LoginService,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.me().subscribe(
      res => {
        this.me = res;
      }
    )
  }

}
