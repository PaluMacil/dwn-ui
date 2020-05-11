import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server-info.service';
import { ServerInfo, AlertMessage } from '@dwn/models';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-admin-site-info',
  templateUrl: './admin-site-info.component.html',
  styleUrls: ['./admin-site-info.component.scss']
})
export class AdminSiteInfoComponent implements OnInit {
  info: ServerInfo;
  alertMessage: AlertMessage;
  iconRefresh = faSyncAlt;
  loading = false;

  constructor(
    private serverService: ServerService
  ) { }

  ngOnInit(): void {
    this.fetchInfo();
  }

  fetchInfo(): void {
    this.loading = true;
    this.serverService.info().pipe(finalize(() => this.loading = false)).subscribe(
      (res) => {
        this.alertMessage = undefined;
        this.info = res;
      },
      (err) => {
        this.alertMessage = AlertMessage.fromHttpErrorResponse(err);
      }
    );
  }
}
