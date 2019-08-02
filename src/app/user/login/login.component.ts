import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginRequest, AlertMessage } from 'src/app/shared/models';
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
        () => {
          this.router.navigate(['/']);
        },
        err => {
          this.alertMessage = AlertMessage.fromHttpErrorResponse(err);
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
