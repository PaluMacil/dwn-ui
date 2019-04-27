import { Component, OnInit } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  description: string;
  // userOwners, etc (group also for owner and participants)
  // link to project
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
