import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ApplicationRoles {
    private client;
    constructor(client: Client);
    /**
       * Returns all application roles. In Jira, application roles are managed using the [Application access configuration](https://confluence.atlassian.com/x/3YxjL) page.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getAllApplicationRoles<T = unknown>(callback: Callback<T>): Promise<void>;
    /**
       * Returns all application roles. In Jira, application roles are managed using the [Application access configuration](https://confluence.atlassian.com/x/3YxjL) page.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getAllApplicationRoles<T = unknown>(callback?: never): Promise<T>;
    /**
       * Returns an application role.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getApplicationRole<T = Models.ApplicationRole>(parameters: Parameters.GetApplicationRole, callback: Callback<T>): Promise<void>;
    /**
       * Returns an application role.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getApplicationRole<T = Models.ApplicationRole>(parameters: Parameters.GetApplicationRole, callback?: never): Promise<T>;
}
