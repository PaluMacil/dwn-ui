import { Component, OnInit } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserCreationRequest } from 'src/app/shared/models';
import { UserService } from '../user.service';

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
    this.userService.createUser(userRequest);
  }

  ngOnInit() {
    this.createUserForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordAgain: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
  }

}
