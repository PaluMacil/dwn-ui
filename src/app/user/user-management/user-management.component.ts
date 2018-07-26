import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  users = new Array<User>();
  selectedUserEmail: string;

  constructor(
    private us: UserService
  ) { }

  selectUser(user: User) {
    this.selectedUserEmail = user.email;
  }

  ngOnInit() {
    this.us.all().subscribe(
      s => {
        this.users.push(...s);
      }
    );
  }

}
