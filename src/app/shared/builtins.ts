import { Me } from './models';

export const GROUPS: Readonly<Record<string, string>> = {
    BuiltInGroupAdmin: 'ADMIN',
    BuiltInGroupSpouse: 'SPOUSE',
    BuiltInGroupResident: 'RESIDENT',
    BuiltInGroupFriend: 'FRIEND',
    BuiltInGroupLandlord: 'LANDLORD',
    BuiltInGroupTenant: 'TENANT',
    BuiltInGroupPowerUser: 'POWER_USER',
    BuiltInGroupUser: 'USER'
};

export const ANONYMOUS_USER: Readonly<Me> = new Me(
  {
    id: 0,
    googleId: '',
    googleImportDate: new Date(),
    primaryEmail: '',
    emails: [],
    tag: '',
    previousTags: [],
    mustChangePWNextLogin: false,
    require2FA: false,
    locked: true,
    disabled: false,
    loginAttempts: 0,
    lastFailedLogin: new Date(),
    displayName: '',
    givenName: '',
    familyName: '',
    link: '',
    picture: '',
    gender: '',
    locale: '',
    lastLogin: new Date(),
    modifiedDate: new Date(),
    createdDate: new Date(),
    hasPassword: false,
    hasVaultPIN: false
  },
  {
    token: '',
    userID: 0,
    ip: '',
    proxy: false,
    vaultUnlocked: false,
    createdDate: new Date(),
    heartbeat: new Date(),
  },
  [],
  false
);
