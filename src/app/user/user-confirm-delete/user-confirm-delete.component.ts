import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserInfo } from '@dwn/models';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';

export interface UserDeletion { userID: number; deleted: boolean; }

@Component({
  selector: 'app-user-confirm-delete',
  templateUrl: './user-confirm-delete.component.html',
  styleUrls: ['./user-confirm-delete.component.scss']
})
export class UserConfirmDeleteComponent implements OnInit {
  user!: UserInfo;

  constructor(public modal: NgbActiveModal, private userService: UserService) { }

  delete(): void {
    this.userService.deleteUser(this.user.id)
      .pipe(first())
      .subscribe(
        (deleted) => {
          const deletionActionResult: UserDeletion = { userID: this.user.id, deleted };
          this.modal.close(deletionActionResult);
        }
      );
  }

  ngOnInit(): void {

  }

}
