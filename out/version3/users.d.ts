import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class Users {
    private client;
    constructor(client: Client);
    /**
       * Returns a user.
       *
       * **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getUser<T = Models.User>(parameters: Parameters.GetUser | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns a user.
       *
       * **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getUser<T = Models.User>(parameters?: Parameters.GetUser, callback?: never): Promise<T>;
    /**
       * Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated.
       *
       * The option is provided to set or generate a password for the user. When using the option to generate a password, by omitting `password` from the request, include `"notification": "true"` to ensure the user is sent an email advising them that their account is created. This email includes a link for the user to set their password. If the notification isn't sent for a generated password, the user will need to be sent a reset password request from Jira.
       *
       * If the user exists and has access to Jira, the operation returns a 201 status. If the user exists but does not have access to Jira, the operation returns a 400 status.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    createUser<T = Models.User>(parameters: Parameters.CreateUser | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated.
       *
       * The option is provided to set or generate a password for the user. When using the option to generate a password, by omitting `password` from the request, include `"notification": "true"` to ensure the user is sent an email advising them that their account is created. This email includes a link for the user to set their password. If the notification isn't sent for a generated password, the user will need to be sent a reset password request from Jira.
       *
       * If the user exists and has access to Jira, the operation returns a 201 status. If the user exists but does not have access to Jira, the operation returns a 400 status.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    createUser<T = Models.User>(parameters?: Parameters.CreateUser, callback?: never): Promise<T>;
    /**
       * Deletes a user.
       *
       * **[Permissions](#permissions) required:** Site administration (that is, membership of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)). */
    removeUser<T = void>(parameters: Parameters.RemoveUser, callback: Callback<T>): Promise<void>;
    /**
       * Deletes a user.
       *
       * **[Permissions](#permissions) required:** Site administration (that is, membership of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)). */
    removeUser<T = void>(parameters: Parameters.RemoveUser, callback?: never): Promise<T>;
    /**
       * Returns a [paginated](#pagination) list of the users specified by one or more account IDs.
       *
       * **[Permissions](#permissions) required:** Permission to access Jira. */
    bulkGetUsers<T = Models.PageBeanUser>(parameters: Parameters.BulkGetUsers, callback: Callback<T>): Promise<void>;
    /**
       * Returns a [paginated](#pagination) list of the users specified by one or more account IDs.
       *
       * **[Permissions](#permissions) required:** Permission to access Jira. */
    bulkGetUsers<T = Models.PageBeanUser>(parameters: Parameters.BulkGetUsers, callback?: never): Promise<T>;
    /**
       * Returns the account IDs for the users specified in the `key` or `username` parameters. Note that multiple `key` or `username` parameters can be specified.
       *
       * **[Permissions](#permissions) required:** Permission to access Jira. */
    bulkGetUsersMigration<T = unknown>(parameters: Parameters.BulkGetUsersMigration | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns the account IDs for the users specified in the `key` or `username` parameters. Note that multiple `key` or `username` parameters can be specified.
       *
       * **[Permissions](#permissions) required:** Permission to access Jira. */
    bulkGetUsersMigration<T = unknown>(parameters?: Parameters.BulkGetUsersMigration, callback?: never): Promise<T>;
    /**
       * Returns the default [issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If `accountId` is not passed in the request, the calling user's details are returned.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLgl), to get the column details for any user.
       *  *  Permission to access Jira, to get the calling user's column details. */
    getUserDefaultColumns<T = unknown>(parameters: Parameters.GetUserDefaultColumns | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns the default [issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If `accountId` is not passed in the request, the calling user's details are returned.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLgl), to get the column details for any user.
       *  *  Permission to access Jira, to get the calling user's column details. */
    getUserDefaultColumns<T = unknown>(parameters?: Parameters.GetUserDefaultColumns, callback?: never): Promise<T>;
    /**
       * Sets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If an account ID is not passed, the calling user's default columns are set. If no column details are sent, then all default columns are removed.
       *
       * The parameters for this resource are expressed as HTML form data. For example, in curl:
       *
       * `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/3/user/columns?accountId=5b10ac8d82e05b22cc7d4ef5'`
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user.
       *  *  Permission to access Jira, to set the calling user's columns. */
    setUserColumns<T = unknown>(parameters: Parameters.SetUserColumns | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Sets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If an account ID is not passed, the calling user's default columns are set. If no column details are sent, then all default columns are removed.
       *
       * The parameters for this resource are expressed as HTML form data. For example, in curl:
       *
       * `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/3/user/columns?accountId=5b10ac8d82e05b22cc7d4ef5'`
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user.
       *  *  Permission to access Jira, to set the calling user's columns. */
    setUserColumns<T = unknown>(parameters?: Parameters.SetUserColumns, callback?: never): Promise<T>;
    /**
       * Resets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user to the system default. If `accountId` is not passed, the calling user's default columns are reset.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user.
       *  *  Permission to access Jira, to set the calling user's columns. */
    resetUserColumns<T = void>(parameters: Parameters.ResetUserColumns | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Resets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user to the system default. If `accountId` is not passed, the calling user's default columns are reset.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user.
       *  *  Permission to access Jira, to set the calling user's columns. */
    resetUserColumns<T = void>(parameters?: Parameters.ResetUserColumns, callback?: never): Promise<T>;
    /**
       * Returns a user's email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603). */
    getUserEmail<T = Models.UnrestrictedUserEmail>(parameters: Parameters.GetUserEmail, callback: Callback<T>): Promise<void>;
    /**
       * Returns a user's email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603). */
    getUserEmail<T = Models.UnrestrictedUserEmail>(parameters: Parameters.GetUserEmail, callback?: never): Promise<T>;
    /**
       * Returns a user's email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603). */
    getUserEmailBulk<T = Models.UnrestrictedUserEmail>(parameters: Parameters.GetUserEmailBulk, callback: Callback<T>): Promise<void>;
    /**
       * Returns a user's email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603). */
    getUserEmailBulk<T = Models.UnrestrictedUserEmail>(parameters: Parameters.GetUserEmailBulk, callback?: never): Promise<T>;
    /**
       * Returns the groups to which a user belongs.
       *
       * **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getUserGroups<T = unknown>(parameters: Parameters.GetUserGroups, callback: Callback<T>): Promise<void>;
    /**
       * Returns the groups to which a user belongs.
       *
       * **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getUserGroups<T = unknown>(parameters: Parameters.GetUserGroups, callback?: never): Promise<T>;
    /**
       * Returns a list of all (active and inactive) users.
       *
       * **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getAllUsersDefault<T = unknown>(parameters: Parameters.GetAllUsersDefault | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns a list of all (active and inactive) users.
       *
       * **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getAllUsersDefault<T = unknown>(parameters?: Parameters.GetAllUsersDefault, callback?: never): Promise<T>;
    /**
       * Returns a list of all (active and inactive) users.
       *
       * **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getAllUsers<T = unknown>(parameters: Parameters.GetAllUsers | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns a list of all (active and inactive) users.
       *
       * **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getAllUsers<T = unknown>(parameters?: Parameters.GetAllUsers, callback?: never): Promise<T>;
}
