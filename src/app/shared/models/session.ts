export interface Session {
    token: string;
    userID: number;
    ip: string;
    proxy: boolean;
    vaultUnlocked: boolean;
    createdDate: Date;
    heartbeat: Date;
}

export interface LoginRequest {
  email: string;
  password: string;
}
