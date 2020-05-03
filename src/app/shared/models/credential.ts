export interface CredentialCreationRequest {
  name: string;
  type: string;
  id: string;
  secret: string;
}

export interface Credential {
  name: string;
  type: string;
  id: string;
  createdBy: number;
  createdDate: Date;
}
