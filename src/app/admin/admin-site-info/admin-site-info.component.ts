import { Component, OnInit } from '@angular/core';
import { ServerInfoService } from '../server-info.service';
import { ServerInfo } from '../../shared/models/server-info';

@Component({
  selector: 'app-admin-site-info',
  templateUrl: './admin-site-info.component.html',
  styleUrls: ['./admin-site-info.component.scss']
})
export class AdminSiteInfoComponent implements OnInit {
  info: ServerInfo;

  constructor(
    private si: ServerInfoService
  ) { }

  ngOnInit() {
    this.si.server().subscribe(
      res => { this.info = res; }
    );

  }

}
