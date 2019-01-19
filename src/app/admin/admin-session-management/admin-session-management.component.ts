import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { SessionDetails } from '../../shared/models/session-details';

@Component({
  selector: 'app-admin-session-management',
  templateUrl: './admin-session-management.component.html',
  styleUrls: ['./admin-session-management.component.scss']
})
export class AdminSessionManagementComponent implements OnInit {

  sessions = new Array<SessionDetails>();

  constructor(
    private us: UserService
  ) { }

  ngOnInit() {
    this.us.sessions().subscribe(
      s => {
        this.sessions.push(...s);
      }
    );
  }

}
