import { User } from './user';
import { Session } from './session';
import { Group } from './group';
import { GROUPS } from '../builtins';

export interface IMe {
    user: User;
    session: Session;
    groups: Group[];
}

export class Me {
    constructor(
        public user: User,
        public session: Session,
        public groups: Group[],
        public authenticated: boolean
    ) { }

    is(group: string) {
        for (const g of this.groups) {
            if (g.name === group) { return true; }
        }
        return false;
    }
}
