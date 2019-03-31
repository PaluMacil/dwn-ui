import { UserInfo } from './user';
import { Session } from './session';
import { Group } from './group';

export interface IMe {
    user: UserInfo;
    session: Session;
    groups: Group[];
}

export class Me implements IMe {
    constructor(
        public user: UserInfo,
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
