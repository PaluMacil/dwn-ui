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
  if (!control.pristine) {
    const password = control.parent?.get('password')?.value; // to get value in input tag
    const passwordAgain = control.value;
    // the password has been entered and they match
    if (password.length > 0 && password !== passwordAgain) {
      return { 'passwordsDoNotMatch': true };
    }
  }
  return null;
};
