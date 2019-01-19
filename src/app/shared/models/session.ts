export interface Session {
    token: string;
    email: string;
    ip: string;
    createdDate: Date;
    heartbeat: Date;
}
