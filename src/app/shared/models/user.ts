import { Me } from './me';

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

export type EmailAction = 'setPrimary' | 'add' | 'delete' |
  'resendVerificationMessage';

export interface Email {
  email: string;
  verified: boolean;
  verifiedDate: Date;
}

export interface VerificationRequest {
  userID: number;
  email: string;
}

export const enum LoginResult {
  LoginResultSuccess = 0,
  LoginResultBadCredentials = 1,
  LoginResultEmailNotVerified = 2,
  LoginResult2FA = 3,
  LoginResultChangePassword = 4,
  LoginResultLockedOrDisabled = 5,
  LoginResultError = 6
}

export interface LoginResponse {
  loginResult: LoginResult;
  intermediateToken?: string;
  me?: Me;
}
