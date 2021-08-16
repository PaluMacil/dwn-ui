import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Group } from '@dwn/models';
import { ServerService } from '../server-info.service';
import { FormGroup, FormControl } from '@angular/forms';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-permission-selector',
  templateUrl: './permission-selector.component.html',
  styleUrls: ['./permission-selector.component.scss']
})
export class PermissionSelectorComponent implements OnInit {
  @Input() group?: Group;
  @Output() groupChange = new EventEmitter<Group>();

  allPermissions = new Array<string>();

  form = new FormGroup({
    permission: new FormControl(),
  });

  constructor(
    private info: ServerService,
    public groupService: GroupService
  ) { }

  addPermission(permission?: string): void {
    if (permission && this.group) {
      this.groupService.addPermission(this.group.name, permission).subscribe(
        (group) => {
          this.groupChange.emit(group);
        }
      );
    }
  }

  removePermission(permission: string): void {
    if (this.group) {
      this.groupService.removePermission(this.group.name, permission).subscribe(
        (group) => {
          this.groupChange.emit(group);
        }
      );
    }
  }

  ngOnInit(): void {
    this.info.permissions().subscribe(
      (permissions) => {
        this.allPermissions.push(...permissions);
      }
    );
  }

}
