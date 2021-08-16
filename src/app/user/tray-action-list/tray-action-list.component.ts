import { Component, OnInit, Input } from '@angular/core';
import { Me } from '@dwn/models';
import { faTachometerAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { GROUPS } from '../../shared/builtins';

@Component({
  selector: 'app-tray-action-list',
  templateUrl: './tray-action-list.component.html',
  styleUrls: ['./tray-action-list.component.scss']
})
export class TrayActionListComponent implements OnInit {

  @Input() me?: Me;
  @Input() simple = false;

  iconProfile = faUserCircle;
  iconAdmin = faTachometerAlt;
  admin = GROUPS.BuiltInGroupAdmin;

  listItemStyle: Record<string, boolean> = {};
  linkStyle: Record<string, boolean> = {};

  ngOnInit(): void {
    this.listItemStyle = {
      'nav-item': this.simple,
      '': !this.simple
    };
    this.linkStyle = {
      'nav-link': this.simple,
      'dropdown-item': !this.simple
    };
  }

}
