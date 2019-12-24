import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginRequest, AlertMessage, LoginResult } from 'src/app/shared/models';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  iconLogin = faArrowRight;
  loginForm: FormGroup;
  alertMessage: AlertMessage;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  login() {
    const loginRequest = this.loginForm.value as LoginRequest;
    this.userService.login(loginRequest)
      .pipe(first())
      .subscribe(
        (message) => {
          switch (message.loginResult) {
            case LoginResult.LoginResultSuccess:
              this.router.navigate(['/']);
              break;
            default:
              console.log(`Login Result: ${message.loginResult}`);
          }
        },
        err => {
          if (err.status === 401) {
            this.alertMessage = new AlertMessage('danger', `${err.statusText}: `, 'Incorrect email or password.');
          } else {
            this.alertMessage = AlertMessage.fromHttpErrorResponse(err);
          }
        }
      );
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

}
