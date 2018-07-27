export interface User {
    googleId: string;
    googleImportDate: Date;
    email: string;
    tag: string;
    previousTags: string[];
    verifiedEmail: boolean;
    locked: boolean;
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