import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  tab = 'siteinfo';

  constructor(public r: ActivatedRoute
  ) {
    if (r.snapshot.params.tab) {
      this.tab = r.snapshot.params.tab;
    }
  }

  ngOnInit() {
  }

}
