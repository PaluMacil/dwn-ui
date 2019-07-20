export interface Group {
    name: string;
    permissions: string[] | null;
    requires2FA: boolean;
    requiresVaultPIN: boolean;
    modifiedBy: number;
    modifiedDate: Date;
}

export interface GroupDisplay extends Group {
  modifiedByDisplayName: string;
}

export interface GroupCreationRequest {
  name: string;
  requires2FA: boolean;
  requiresVaultPIN: boolean;
}
