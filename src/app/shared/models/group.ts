export interface Group {
    name: string;
    permissions: string[] | null;
    modifiedBy: string;
    modifiedDate: Date;
}
