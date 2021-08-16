import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Me } from '@dwn/models';
import { UserService } from '../../user.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  tab = 'profile';
  me$: BehaviorSubject<Me>;

  constructor(public r: ActivatedRoute, public userService: UserService
  ) {
    if (r.snapshot.params.tab) {
      this.tab = r.snapshot.params.tab;
    }
    this.me$ = this.userService.me$;
  }
}
