import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo } from '../../shared/models';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserConfirmDeleteComponent } from '../user-confirm-delete/user-confirm-delete.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  selectedUser: UserInfo;
  users = new Array<UserInfo>();
  iconDelete = faUserTimes;

  constructor(
    private us: UserService,
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
  }

  ngOnInit() {
    this.us.all().subscribe(
      s => {
        this.users.push(...s);
      }
    );
  }

}
