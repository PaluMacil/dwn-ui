import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../group.service';
import { Group, UserInfo } from '@dwn/models';
import { UserService } from '../../user/user.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-group-user-selector',
  templateUrl: './group-user-selector.component.html',
  styleUrls: ['./group-user-selector.component.scss']
})
export class GroupUserSelectorComponent implements OnInit {
  @Input() group?: Group;
  users = new Array<UserInfo>();
  selectedUser?: UserInfo;

  constructor(
    public groupService: GroupService,
    private userService: UserService
  ) { }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) => query.length < (query.includes('@') ? 3 : 2) ? []
        : this.userService.userSuggestion(query))
    )

  formatter = (x: { displayName: string }): string => x.displayName;

  addUser(): void {
    if (this.selectedUser && this.group) {
      this.groupService.addUser(this.selectedUser.id, this.group.name).subscribe(
        (ug) => {
          if (this.selectedUser) {
            this.users.push(this.selectedUser);
            this.users = this.users.sort(
              (a, b) => {
                if (a.displayName < b.displayName) { return -1; }
                if (a.displayName > b.displayName) { return 1; }
                return 0;
              }
            );
            this.selectedUser = undefined;
          }
        }
      );
    }
  }

  removeUser(id: number): void {
    if (this.group) {
      this.groupService.removeUser(id, this.group.name).subscribe(
        (usergroup) => {
          this.users = this.users.filter((u) => u.id !== usergroup.userID);
        }
      );
    }
  }

  ngOnInit(): void {
    if (this.group) {
      this.groupService.usersFor(this.group.name).subscribe(
        (users) => {
          this.users.push(...users);
        }
      );
    }
  }

}
