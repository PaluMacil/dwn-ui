import { Component, Input } from '@angular/core';
import { Me } from '@dwn/models';
import { UserService } from '../user.service';
import { faSignOutAlt, faUserCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss']
})
export class ProfileButtonComponent {

  @Input() me?: Me;

  iconSignOut = faSignOutAlt;
  iconProfile = faUserCircle;
  iconSolidCircle = faCircle;

  constructor(public userService: UserService) { }
}
