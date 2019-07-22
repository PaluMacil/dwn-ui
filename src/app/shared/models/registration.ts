export interface UserCreationRequest {
  email: string;
  password: string;
  mustChangePWNextLogin: boolean;
  givenName: string;
  familyName: string;
}
