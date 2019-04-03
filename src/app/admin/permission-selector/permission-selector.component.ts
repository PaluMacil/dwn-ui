import { Component, OnInit, Input, Output, EventEmitter, Optional } from '@angular/core';
import { Group } from '../../shared/models';
import { ServerService } from '../server-info.service';
import { FormGroup, FormControl } from '@angular/forms';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-permission-selector',
  templateUrl: './permission-selector.component.html',
  styleUrls: ['./permission-selector.component.scss']
})
export class PermissionSelectorComponent implements OnInit {
  @Input() group: Group;
  @Output() change = new EventEmitter<Group>();

  allPermissions = new Array<string>();

  form = new FormGroup({
    permission: new FormControl(),
  });

  constructor(
    private info: ServerService,
    public gs: GroupService
  ) { }

  addPermission(permission: string) {
    const t = 'test';
    this.gs.addPermission(this.group.name, permission).subscribe(
      g => {
        this.change.emit(g);
      }
    );
  }

  removePermission(permission: string) {
    const t = 'test';
    this.gs.removePermission(this.group.name, permission).subscribe(
      g => {
        this.change.emit(g);
      }
    );
  }

  ngOnInit() {
    this.info.permissions().subscribe(
      (p) => {
        this.allPermissions.push(...p);
      }
    );
  }

}
