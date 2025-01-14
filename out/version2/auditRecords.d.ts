import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class AuditRecords {
    private client;
    constructor(client: Client);
    /**
       * Returns a list of audit records. The list can be filtered to include items:
       *
       *  *  containing a string in at least one field. For example, providing *up* will return all audit records where one or more fields contains words such as *update*.
       *  *  created on or after a date and time.
       *  *  created or or before a date and time.
       *  *  created during a time period.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getAuditRecords<T = Models.AuditRecords>(parameters: Parameters.GetAuditRecords | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns a list of audit records. The list can be filtered to include items:
       *
       *  *  containing a string in at least one field. For example, providing *up* will return all audit records where one or more fields contains words such as *update*.
       *  *  created on or after a date and time.
       *  *  created or or before a date and time.
       *  *  created during a time period.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getAuditRecords<T = Models.AuditRecords>(parameters?: Parameters.GetAuditRecords, callback?: never): Promise<T>;
}
