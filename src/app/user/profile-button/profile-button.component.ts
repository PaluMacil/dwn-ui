import { Component, OnInit, Input } from '@angular/core';
import { Me } from '../../shared/models';
import { LoginService } from '../login.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss']
})
export class ProfileButtonComponent implements OnInit {

  @Input() me: Me;

  iconSignOut = faSignOutAlt;

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

}
