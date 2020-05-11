import { UserInfo } from './user';
import { Session } from './session';
import { Group } from './group';

export interface IMe {
    user: UserInfo;
    session: Session;
    groups: Array<Group>;
}

export class Me implements IMe {
    constructor(
        public user: UserInfo,
        public session: Session,
        public groups: Array<Group>,
        public authenticated: boolean
    ) { }

    is(group: string): boolean {
        for (const g of this.groups) {
            if (g.name === group) { return true; }
        }
        return false;
    }
}
