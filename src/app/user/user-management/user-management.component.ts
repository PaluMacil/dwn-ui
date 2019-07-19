import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo } from '../../shared/models';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  users = new Array<UserInfo>();
  selectedUserEmail: string;

  constructor(
    private us: UserService
  ) { }

  selectUser(user: UserInfo) {
    this.selectedUserEmail = user.primaryEmail;
  }

  ngOnInit() {
    this.us.all().subscribe(
      s => {
        this.users.push(...s);
      }
    );
  }

}
