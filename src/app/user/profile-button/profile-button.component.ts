import { Component, OnInit, Input } from '@angular/core';
import { Me } from '../../shared/models/me';
import { LoginService } from '../login.service';
import { faTachometerAlt, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { GROUPS } from '../../shared/builtins';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss']
})
export class ProfileButtonComponent implements OnInit {

  @Input() me: Me;

  iconAdmin = faTachometerAlt;
  iconProfile = faUserCircle;
  iconSignOut = faSignOutAlt;
  admin = GROUPS.BuiltInGroupAdmin;

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

}
