import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-admin-smtp',
  templateUrl: './admin-smtp.component.html',
  styleUrls: ['./admin-smtp.component.scss']
})
export class AdminSmtpComponent implements OnInit {
  appCredentials$ = this.configurationService.smtpCredentials;

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit(): void {
  }

}
