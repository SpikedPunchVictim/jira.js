import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class ProjectPermissionSchemes {
    private client;
    constructor(client: Client);
    /**
       * Returns the [issue security scheme](https://confluence.atlassian.com/x/J4lKLg) associated with the project.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or the *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg). */
    getProjectIssueSecurityScheme<T = Models.SecurityScheme>(parameters: Parameters.GetProjectIssueSecurityScheme, callback: Callback<T>): Promise<void>;
    /**
       * Returns the [issue security scheme](https://confluence.atlassian.com/x/J4lKLg) associated with the project.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or the *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg). */
    getProjectIssueSecurityScheme<T = Models.SecurityScheme>(parameters: Parameters.GetProjectIssueSecurityScheme, callback?: never): Promise<T>;
    /**
       * Gets the [permission scheme](https://confluence.atlassian.com/x/yodKLg) associated with the project.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg). */
    getAssignedPermissionScheme<T = Models.PermissionScheme>(parameters: Parameters.GetAssignedPermissionScheme, callback: Callback<T>): Promise<void>;
    /**
       * Gets the [permission scheme](https://confluence.atlassian.com/x/yodKLg) associated with the project.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg). */
    getAssignedPermissionScheme<T = Models.PermissionScheme>(parameters: Parameters.GetAssignedPermissionScheme, callback?: never): Promise<T>;
    /**
       * Assigns a permission scheme with a project. See [Managing project permissions](https://confluence.atlassian.com/x/yodKLg) for more information about permission schemes.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) */
    assignPermissionScheme<T = Models.PermissionScheme>(parameters: Parameters.AssignPermissionScheme, callback: Callback<T>): Promise<void>;
    /**
       * Assigns a permission scheme with a project. See [Managing project permissions](https://confluence.atlassian.com/x/yodKLg) for more information about permission schemes.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) */
    assignPermissionScheme<T = Models.PermissionScheme>(parameters: Parameters.AssignPermissionScheme, callback?: never): Promise<T>;
    /**
       * Returns all [issue security](https://confluence.atlassian.com/x/J4lKLg) levels for the project that the user has access to.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** *Browse projects* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project, however, issue security levels are only returned for authenticated user with *Set Issue Security* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project. */
    getSecurityLevelsForProject<T = Models.ProjectIssueSecurityLevels>(parameters: Parameters.GetSecurityLevelsForProject, callback: Callback<T>): Promise<void>;
    /**
       * Returns all [issue security](https://confluence.atlassian.com/x/J4lKLg) levels for the project that the user has access to.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** *Browse projects* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project, however, issue security levels are only returned for authenticated user with *Set Issue Security* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project. */
    getSecurityLevelsForProject<T = Models.ProjectIssueSecurityLevels>(parameters: Parameters.GetSecurityLevelsForProject, callback?: never): Promise<T>;
}
