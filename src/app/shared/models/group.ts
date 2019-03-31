export interface Group {
    name: string;
    permissions: string[] | null;
    requires2FA: boolean;
    requiresVaultPIN: boolean;
    modifiedBy: string;
    modifiedDate: Date;
}
