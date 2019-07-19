export interface Session {
    token: string;
    userID: number;
    ip: string;
    proxy: boolean;
    vaultUnlocked: boolean;
    createdDate: Date;
    heartbeat: Date;
}
