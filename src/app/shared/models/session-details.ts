import { User } from './user';

export interface SessionDetails {
    user: User;
    session: SessionInfo;
}

export interface SessionInfo {
    ip: string;
    proxy: boolean;
    createdDate: Date;
    heartbeat: Date;
}
