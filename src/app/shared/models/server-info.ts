import { Configuration } from './configuration';

export interface ServerInfo {
    config: Configuration;
    databaseInitDate: Date;
    wizardComplete: boolean;
    goVersion: string;
    numCPUs: number;
    allocatedMemory: number;
    dataDirSize: number;
}
