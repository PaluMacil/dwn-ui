import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { Group } from '../../shared/models/group';

@Component({
  selector: 'app-admin-group-management',
  templateUrl: './admin-group-management.component.html',
  styleUrls: ['./admin-group-management.component.scss']
})
export class AdminGroupManagementComponent implements OnInit {

  groups = new Array<Group>();
  selectedGroupName: string;

  constructor(
    private gs: GroupService
  ) { }

  selectGroup(group: Group) {
    this.selectedGroupName = group.name;
  }

  updateGroup(group: Group) {
    const idx = this.groups.findIndex(g => g.name === group.name);
    this.groups[idx] = group;
  }

  ngOnInit() {
    this.gs.groups().subscribe(
      g => this.groups = g
    );
  }

}
