import { Me } from './models/me';
import { User } from './models/user';

export const GROUPS: Readonly<Record<string, string>> = {
    BuiltInGroupAdmin: 'ADMIN',
    BuiltInGroupSpouse: 'SPOUSE',
    BuiltInGroupResident: 'RESIDENT',
    BuiltInGroupFriend: 'FRIEND',
    BuiltInGroupLandlord: 'LANDLORD',
    BuiltInGroupTenant: 'TENANT',
    BuiltInGroupUser: 'USER'
};

export const ANONYMOUS_USER: Readonly<Me> = new Me(
  {
    googleId: '',
    googleImportDate: new Date(),
    email: '',
    tag: '',
    previousTags: [],
    verifiedEmail: false,
    locked: true,
    displayName: '',
    givenName: '',
    familyName: '',
    link: '',
    picture: '',
    gender: '',
    locale: '',
    lastLogin: new Date(),
    modifiedDate: new Date(),
    createdDate: new Date()
  },
  {
    token: '',
    email: '',
    ip: '',
    createdDate: new Date(),
    heartbeat: new Date(),
  },
  [],
  false
);
