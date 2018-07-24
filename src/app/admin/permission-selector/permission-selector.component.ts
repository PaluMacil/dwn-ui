import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../shared/models/group';
import { ServerInfoService } from '../server-info.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-permission-selector',
  templateUrl: './permission-selector.component.html',
  styleUrls: ['./permission-selector.component.scss']
})
export class PermissionSelectorComponent implements OnInit {
  @Input() group: Group;
  allPermissions = new Array<string>();

  form = new FormGroup({
    permission: new FormControl(),
  });

  constructor(private info: ServerInfoService) { }

  ngOnInit() {
    this.info.permissions().subscribe(
      (p) => {
        this.allPermissions.push(...p);
      }
    );
  }

}
