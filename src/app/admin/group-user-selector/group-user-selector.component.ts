import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../group.service';
import { Group } from '../../shared/models/group';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-group-user-selector',
  templateUrl: './group-user-selector.component.html',
  styleUrls: ['./group-user-selector.component.scss']
})
export class GroupUserSelectorComponent implements OnInit {
  @Input() group: Group;
  users: Array<User>;

  constructor(
    public gs: GroupService
  ) { 
    this.users = [];
  }

  addUser(email: string) { //TODO: Take an actual user object once the autofill input provides users
    this.gs.addUser(email, this.group.name).subscribe(
      ug => {
        let u = {email: ug.email, displayName: ug.email} as User //TODO: use user from autofill once available
        this.users.push(u)
        this.users = this.users.sort(
          (a,b) => {
            if (a.displayName < b.displayName) return -1;
            if (a.displayName > b.displayName) return 1;
            return 0;
          }
        )
      }
    );
  }

  removeUser(email: string) {
    this.gs.removeUser(email, this.group.name).subscribe(
      ug => {
        this.users = this.users.filter(u => u.email !== ug.email)
      }
    );
  }

  ngOnInit() {
    this.gs.usersFor(this.group.name).subscribe(
      users => {
        this.users = users;
      }
    )
  }

}
