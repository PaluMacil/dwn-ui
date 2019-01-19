import { Session } from './session';
import { User } from './user';

export interface SessionDetails {
    user: User;
    session: Session;
}
