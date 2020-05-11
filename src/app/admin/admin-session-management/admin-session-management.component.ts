import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { SessionDetails } from '@dwn/models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-session-management',
  templateUrl: './admin-session-management.component.html',
  styleUrls: ['./admin-session-management.component.scss']
})
export class AdminSessionManagementComponent implements OnInit {

  sessions = new Array<SessionDetails>();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.sessions()
      .pipe(
        map(
          (sessionDetails) => {
            return sessionDetails.map(
              (detail) => {
                const ipParts = detail.session.ip.split(':');
                const ipString = ipParts.length <= 2 ? ipParts[0] : ipParts.slice(0, 3).join(':');
                detail.session.ip = ipString;
                return detail;
              }
            );
          }
        )
      )
      .subscribe(
        (s) => {
          this.sessions.push(...s);
        }
      );
  }
}
