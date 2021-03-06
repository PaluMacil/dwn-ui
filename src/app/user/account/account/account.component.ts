import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Me } from '@dwn/models';
import { UserService } from '../../user.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  tab = 'profile';
  me$: BehaviorSubject<Me>;

  ngOnInit(): void {
  }

  constructor(public r: ActivatedRoute, public userService: UserService
  ) {
    if (r.snapshot.params.tab) {
      this.tab = r.snapshot.params.tab;
    }
    this.me$ = this.userService.me$;
  }
}
