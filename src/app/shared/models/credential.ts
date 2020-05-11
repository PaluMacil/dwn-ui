export interface CredentialCreationRequest {
  name: string;
  type: string;
  id: string;
  secret: string;
}

export interface AppCredential {
  name: string;
  type: string;
  id: string;
  createdBy: number;
  createdDate: Date;
}

export enum ForeignSystemType {
  SMTP = 'SMTP',
  Auth = 'AUTH'
}

export enum SMTPTypes {
  SendGrid = 'SendGrid'
}

export enum AuthTypes {
  Google = 'Google'
}
