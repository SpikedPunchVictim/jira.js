import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueSecuritySchemes {
    private client;
    constructor(client: Client);
    /**
       * Returns all [issue security schemes](https://confluence.atlassian.com/x/J4lKLg).
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getIssueSecuritySchemes<T = Models.SecuritySchemes>(callback: Callback<T>): Promise<void>;
    /**
       * Returns all [issue security schemes](https://confluence.atlassian.com/x/J4lKLg).
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getIssueSecuritySchemes<T = Models.SecuritySchemes>(callback?: never): Promise<T>;
    /**
       * Returns an issue security scheme along with its security levels.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
       *  *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project that uses the requested issue security scheme. */
    getIssueSecurityScheme<T = Models.SecurityScheme>(parameters: Parameters.GetIssueSecurityScheme, callback: Callback<T>): Promise<void>;
    /**
       * Returns an issue security scheme along with its security levels.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
       *  *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project that uses the requested issue security scheme. */
    getIssueSecurityScheme<T = Models.SecurityScheme>(parameters: Parameters.GetIssueSecurityScheme, callback?: never): Promise<T>;
}