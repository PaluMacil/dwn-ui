import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Me } from '../../../shared/models/me';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  tab = 'profile';
  me: Me;

  constructor(public r: ActivatedRoute, public userService: UserService
  ) {
    if (r.snapshot.data.me) {
      this.me = r.snapshot.data.me;
    }
    if (r.snapshot.params.tab) {
      this.tab = r.snapshot.params.tab;
    }
  }

  ngOnInit() {
    if (!this.me) {
      this.userService.me().subscribe(
        res => {
          this.me = res;
        }
      );
    }
  }
}
