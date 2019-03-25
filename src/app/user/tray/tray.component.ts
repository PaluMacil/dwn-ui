import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Me } from '../../shared/models';
import { faSignInAlt, faBell } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tray',
  templateUrl: './tray.component.html',
  styleUrls: ['./tray.component.scss']
})
export class TrayComponent implements OnInit {
  iconSignIn = faSignInAlt;
  iconAlert = faBell;
  me$: BehaviorSubject<Me>;

  constructor(
    public userService: UserService
  ) {
    this.me$ = userService.me$;
  }

  ngOnInit() {
  }
}
