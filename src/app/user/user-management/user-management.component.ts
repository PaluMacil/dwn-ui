import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo, AlertMessage } from '@dwn/models';
import { faUserTimes, faUserSlash, faUserCheck, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserConfirmDeleteComponent, UserDeletion } from '../user-confirm-delete/user-confirm-delete.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  selectedUser: UserInfo;
  users = new Array<UserInfo>();
  iconDelete = faUserTimes;
  iconLock = faLock;
  iconUnlock = faLockOpen;
  iconDisable = faUserSlash;
  iconEnable = faUserCheck;
  alertMessage: AlertMessage;

  constructor(
    private userService: UserService,
    private _modalService: NgbModal
  ) { }

  selectUser(user: UserInfo): void {
    this.selectedUser = user;
  }

  deselectUser(event: MouseEvent): void {
    this.selectedUser = null;
    event.stopPropagation();
  }

  setDisabled(user: UserInfo, status: boolean): void {
    this.userService.setDisabledStatus(user.id, status)
      .pipe(first())
      .subscribe(
        () => user.disabled = status,
        (err) => this.alertMessage = AlertMessage.fromHttpErrorResponse(err)
      );
  }

  setLocked(user: UserInfo, status: boolean): void {
    this.userService.setLockedStatus(user.id, status)
      .pipe(first())
      .subscribe(
        () => user.locked = status,
        (err) => this.alertMessage = AlertMessage.fromHttpErrorResponse(err)
      );
  }

  openDeleteDialog(): void {
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

  ngOnInit(): void {
    this.userService.all().pipe(first()).subscribe(
      (users) => {
        this.users.push(...users);
      }
    );
  }

}
