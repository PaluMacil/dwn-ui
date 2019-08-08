import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo, AlertMessage } from '../../shared/models';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserConfirmDeleteComponent, UserDeletion } from '../user-confirm-delete/user-confirm-delete.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  selectedUser: UserInfo;
  users = new Array<UserInfo>();
  iconDelete = faUserTimes;
  alertMessage: AlertMessage;

  constructor(
    private userService: UserService,
    private _modalService: NgbModal
  ) { }

  selectUser(user: UserInfo) {
    this.selectedUser = user;
  }

  deselectUser(event: MouseEvent) {
    this.selectedUser = null;
    event.stopPropagation();
  }

  openDeleteDialog() {
    const modalRef = this._modalService.open(UserConfirmDeleteComponent);
    modalRef.componentInstance.user = this.selectedUser;
    modalRef.result.then(
      (result: UserDeletion) => {
        this.users = this.users.filter((u) => result.userID !== u.id);
      },
      (err) => {
        this.alertMessage = AlertMessage.fromHttpErrorResponse(err);
      }
    );
  }

  ngOnInit() {
    this.userService.all().subscribe(
      users => {
        this.users.push(...users);
      }
    );
  }

}
