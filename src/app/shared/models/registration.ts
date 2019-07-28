import { AbstractControl } from '@angular/forms';

export interface UserCreationRequest {
  email: string;
  password: string;
  passwordAgain: string;
  withVerifiedEmail?: boolean;
  ignorePasswordRequirements?: boolean;
  mustChangePWNextLogin: boolean;
  givenName: string;
  familyName: string;
}

export const validatePasswordsMatch = (control: AbstractControl): { [key: string]: boolean } | null => {
  const password = control.get('password').value; // to get value in input tag
  const passwordAgain = control.get('passwordAgain').value;
  // the password has been entered and they match
  if (password.length > 0 && password !== passwordAgain) {
    return { 'passwordsDoNotMatch': true };
  }
  return null;
};
