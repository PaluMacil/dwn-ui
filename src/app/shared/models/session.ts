export interface Session {
    token: string;
    email: string;
    createdDate: Date;
    heartbeat: Date;
}