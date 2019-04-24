export interface Session {
    token: string;
    email: string;
    ip: string;
    proxy: boolean;
    vaultUnlocked: boolean;
    createdDate: Date;
    heartbeat: Date;
}
