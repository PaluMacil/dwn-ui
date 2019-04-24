import { Me } from './models';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';

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
    googleId: '',
    googleImportDate: new Date(),
    email: '',
    tag: '',
    previousTags: [],
    mustChangePWNextLogin: false,
    require2FA: false,
    verifiedEmail: false,
    verifiedEmailDate: new Date(),
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
    email: '',
    ip: '',
    proxy: false,
    vaultUnlocked: false,
    createdDate: new Date(),
    heartbeat: new Date(),
  },
  [],
  false
);
