import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Email, UserInfo } from '@dwn/models';
import { faStar, faMailBulk, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-email-management',
  templateUrl: './email-management.component.html',
  styleUrls: ['./email-management.component.scss']
})
export class EmailManagementComponent implements OnInit {
  @Input() user?: UserInfo;
  @Output() emailsChanged = new EventEmitter<Array<Email>>();
  @Output() primaryChanged = new EventEmitter<string>();

  iconPrimary = faStar;
  iconResend = faMailBulk;
  iconDelete = faTrashAlt;

  constructor(private userService: UserService) { }

  setPrimary(emailRecord: Email): void {
    this.primaryChanged.emit(emailRecord.email);
  }

  resendVerification(emailRecord: Email): void {
    // TODO: call service
  }

  deleteRecord(emailRecord: Email): void {
    if (this.user) {
      this.userService.modifyEmailRecord(this.user.id, emailRecord.email, 'delete')
      .pipe(first())
      .subscribe(
        (modifiedUser) => {
          const newEmails = modifiedUser.emails.filter((email) => emailRecord.email !== email.email);
          this.emailsChanged.emit(newEmails);
        }
      );
    }
  }

  verifyRecord(emailRecord: Email): void {
    if (this.user) {
      this.userService.verifyUserEmail(this.user.id, emailRecord.email)
        .pipe(first())
        .subscribe(
          (modifiedUser: UserInfo) => {
            const newEmails = modifiedUser.emails.map(
              (email) => {
                if (email.email === emailRecord.email) {
                  email.verified = true;
                }
                return email;
              }
            );
            this.emailsChanged.emit(newEmails);
          }
        );
    }
  }

  ngOnInit(): void {
  }

}
