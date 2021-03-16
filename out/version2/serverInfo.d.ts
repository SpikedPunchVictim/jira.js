import * as Models from './models';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ServerInfo {
    private client;
    constructor(client: Client);
    /**
       * Returns information about the Jira instance.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None. */
    getServerInfo<T = Models.ServerInformation>(callback: Callback<T>): Promise<void>;
    /**
       * Returns information about the Jira instance.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None. */
    getServerInfo<T = Models.ServerInformation>(callback?: never): Promise<T>;
}
