export interface User {
  id: number;
  googleId: string;
  googleImportDate: Date;
  primaryEmail: string;
  emails: Array<Email>;
  tag: string;
  previousTags: string[];
  mustChangePWNextLogin: boolean;
  require2FA: boolean;
  locked: boolean;
  disabled: boolean;
  loginAttempts: number;
  lastFailedLogin: Date;
  displayName: string;
  givenName: string;
  familyName: string;
  link: string;
  picture: string;
  gender: string;
  locale: string;
  lastLogin: Date;
  modifiedDate: Date;
  createdDate: Date;
}

export interface UserInfo extends User {
  hasPassword: boolean;
  hasVaultPIN: boolean;
}

export interface Email {
  email: string;
  verified: boolean;
  verifiedDate: Date;
}

export interface VerificationRequest {
  userID: number;
  email: string;
}
