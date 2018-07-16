import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Me } from '../../../shared/models/me';
import { UserService } from '../../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  me: Me;

  constructor(
    public userService: UserService,
    r: ActivatedRoute
  ) {
    this.me = r.snapshot.data.me;
  }

  ngOnInit(): void {
    if (!this.me) {
      this.userService.me().subscribe(
        res => {
          this.me = res;
        }
      )
    }
  }
}
