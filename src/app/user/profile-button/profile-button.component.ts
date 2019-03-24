import { Component, OnInit, Input } from '@angular/core';
import { Me } from '../../shared/models';
import { UserService } from '../user.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss']
})
export class ProfileButtonComponent implements OnInit {

  @Input() me: Me;

  iconSignOut = faSignOutAlt;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
