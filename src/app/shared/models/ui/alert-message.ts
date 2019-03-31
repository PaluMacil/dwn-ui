import { HttpErrorResponse } from '@angular/common/http';

type AlertType = 'success' | 'info' | 'warning' | 'danger';

export class AlertMessage {
  public static fromHttpErrorResponse(err: HttpErrorResponse): AlertMessage {
    switch (err.status) {
      case 500:
        return new AlertMessage('danger', `${err.statusText}: `, 'Check the logs for more info.');
      case 504:
        return new AlertMessage('danger', `${err.statusText}: `, 'Could not reach the backend server.');
      default:
        return new AlertMessage('danger', `${err.statusText}: `, err.message);
    }
  }

  constructor(public type: AlertType, public title: string, public body: string) { }
}
