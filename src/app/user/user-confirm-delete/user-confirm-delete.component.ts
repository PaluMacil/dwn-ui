import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserInfo } from 'src/app/shared/models';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-confirm-delete',
  templateUrl: './user-confirm-delete.component.html',
  styleUrls: ['./user-confirm-delete.component.scss']
})
export class UserConfirmDeleteComponent implements OnInit {
  user: UserInfo;

  constructor(public modal: NgbActiveModal, private userService: UserService) { }

  delete() {
    this.userService.deleteUser(this.user.id).pipe(first()).subscribe();
    this.modal.close('Ok click');
  }

  ngOnInit() {

  }

}
