import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginRequest, AlertMessage, LoginResult } from '@dwn/models';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  iconLogin = faArrowRight;
  loginForm: FormGroup;
  alertMessage?: AlertMessage;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    if (this.loginForm) {
      const loginRequest = this.loginForm.value as LoginRequest;
      this.userService.login(loginRequest)
        .pipe(first())
        .subscribe(
          (message) => {
            switch (message.loginResult) {
              case LoginResult.LoginResultSuccess:
                if (message.me) {
                  this.userService.setToken(message.me.session.token);
                  this.userService.checkMe();
                  this.router.navigate(['/']);
                }
                break;
              default:
                console.log(`Login Result: ${message.loginResult}`);
            }
          },
          (err) => {
            if (err.status === 401) {
              this.alertMessage = new AlertMessage('danger', `${err.statusText}: `, 'Incorrect email or password.');
            } else {
              this.alertMessage = AlertMessage.fromHttpErrorResponse(err);
            }
          }
        );
    }
  }
}
