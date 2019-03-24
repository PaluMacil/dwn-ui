import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Me } from '../../shared/models';
import { faSignInAlt, faBell } from '@fortawesome/free-solid-svg-icons';

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
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.isLoggedIn().subscribe(
      // TODO: weirdly redundant now that logged in is stored via Me.authenticated;
      // will eliminate once 
        (loggedIn) => {
          if (loggedIn) {
            this.userService.me().subscribe(
              me => this.me = me
            );
          } else {
            this.me = null;
          }
        }
      );
    }
}
