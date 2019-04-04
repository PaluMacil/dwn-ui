export interface User {
    googleId: string;
    googleImportDate: Date;
    email: string;
    tag: string;
    previousTags: string[];
    verifiedEmail: boolean;
    verifiedEmailDate: Date;
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
