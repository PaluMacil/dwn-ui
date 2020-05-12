import { Component, OnInit } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserCreationRequest, validatePasswordsMatch } from '@dwn/models';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  iconAddUser = faUserPlus;
  createUserForm?: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  createUser(): void {
    if (this.createUserForm) {
      const userRequest = this.createUserForm.value as UserCreationRequest;
      this.userService.createUser(userRequest).pipe(first()).subscribe(
        (u) => {
          if (u.emails[0].verified) {
            this.router.navigate(['/user/login']);
          }
        }
      );
    }
  }

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordAgain: ['', [Validators.required, validatePasswordsMatch]],
      givenName: ['', [Validators.required]],
      familyName: ['', [Validators.required]],
    });
  }
}
