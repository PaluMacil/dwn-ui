import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../group.service';
import { Group } from '../../shared/models/group';
import { User } from '../../shared/models/user';
import { UserService } from '../../user/user.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-group-user-selector',
  templateUrl: './group-user-selector.component.html',
  styleUrls: ['./group-user-selector.component.scss']
})
export class GroupUserSelectorComponent implements OnInit {
  @Input() group: Group;
  users = new Array<User>();
  selectedUser : User;

  constructor(
    public gs: GroupService,
    private us: UserService
  ) { }

  search = (text$: Observable<string>) => 
  text$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(query => query.length < (query.includes('@') ? 3 : 2) ? []
      : this.us.userSuggestion(query))
  );

  formatter = (x: {displayName: string}) => x.displayName;

  addUser() {
    this.gs.addUser(this.selectedUser.email, this.group.name).subscribe(
      ug => {
        this.users.push(this.selectedUser)
        this.users = this.users.sort(
          (a,b) => {
            if (a.displayName < b.displayName) return -1;
            if (a.displayName > b.displayName) return 1;
            return 0;
          }
        );
        this.selectedUser = null;
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
        this.users.push(...users);
      }
    )
  }

}
