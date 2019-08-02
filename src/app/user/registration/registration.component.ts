import { Component, OnInit } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserCreationRequest, validatePasswordsMatch } from 'src/app/shared/models';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  iconAddUser = faUserPlus;
  createUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  createUser() {
    const userRequest = this.createUserForm.value as UserCreationRequest;
    this.userService.createUser(userRequest).pipe(first()).subscribe(
      (u) => console.log(u)
    );
  }

  ngOnInit() {
    this.createUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordAgain: ['', [Validators.required, validatePasswordsMatch]],
      givenName: ['', [Validators.required]],
      familyName: ['', [Validators.required]],
    });
  }

}
