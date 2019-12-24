import { HttpErrorResponse } from '@angular/common/http';

type AlertType = 'success' | 'info' | 'warning' | 'danger';

export class AlertMessage {
  public static fromHttpErrorResponse(err: HttpErrorResponse): AlertMessage {
    switch (err.status) {
      case 200:
        // if this error occurred due to parsing and there is an internal error explaining
        // the tokens causing the problem, create an appropriate message:
        if (err.message.indexOf('parsing') !== -1 && err.error && err.error.error && err.error.error.message) {
          return new AlertMessage('danger', 'Parsing Response: ',
            `for ${err.url} ${err.error.error.message}`);
        } else {
          return new AlertMessage('danger', 'After response: ', err.message);
        }
      case 401:
        return new AlertMessage('danger', `${err.statusText}: `, 'You must be logged in.');
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
