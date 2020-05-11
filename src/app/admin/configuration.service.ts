import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { AppCredential, ForeignSystemType } from '@dwn/models';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  authCredentials: ReplaySubject<Array<AppCredential>> = new ReplaySubject(1);
  smtpCredentials: ReplaySubject<Array<AppCredential>> = new ReplaySubject(1);

  constructor(
    private http: HttpClient
  ) {
    this.fetchCredentials(ForeignSystemType.Auth);
    this.fetchCredentials(ForeignSystemType.SMTP);
  }

  fetchCredentials(fsType: ForeignSystemType): void {
    let params = new HttpParams();
    params = params.append('type', fsType);
    this.http.get<Array<AppCredential>>('api/configuration/credentials')
      .subscribe((credentials) => {
        switch (fsType) {
          case ForeignSystemType.Auth:
            this.authCredentials.next(credentials);
            break;
          case ForeignSystemType.SMTP:
            this.smtpCredentials.next(credentials);
            break;
        }
      });
  }

}
