import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Email, UserInfo } from 'src/app/shared/models';
import { faStar, faMailBulk, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';

@Component({
  selector: 'app-email-management',
  templateUrl: './email-management.component.html',
  styleUrls: ['./email-management.component.scss']
})
export class EmailManagementComponent implements OnInit {
  @Input() user: UserInfo;
  @Output() emailsChanged = new EventEmitter<Array<Email>>();
  @Output() primaryChanged = new EventEmitter<string>();

  iconPrimary = faStar;
  iconResend = faMailBulk;
  iconDelete = faTrashAlt;

  constructor(private userService: UserService) { }

  setPrimary(emailRecord: Email) {
    // TODO: modal: explain why can't set to primary if not verified
    this.primaryChanged.emit(emailRecord.email);
  }

  resendVerification (emailRecord: Email) {
    // TODO: call service
  }

  deleteRecord(emailRecord: Email) {
    // TODO: cannot delete primary email
    const newEmails = this.user.emails.filter(email => emailRecord.email !== email.email);
    this.emailsChanged.emit(newEmails);
  }

  ngOnInit() {
  }

}
