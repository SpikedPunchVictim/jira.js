import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class FilterSharing {
    private client;
    constructor(client: Client);
    /**
       * Returns the default sharing settings for new filters and dashboards for a user.
       *
       * **[Permissions](#permissions) required:** Permission to access Jira. */
    getDefaultShareScope<T = Models.DefaultShareScope>(callback: Callback<T>): Promise<void>;
    /**
       * Returns the default sharing settings for new filters and dashboards for a user.
       *
       * **[Permissions](#permissions) required:** Permission to access Jira. */
    getDefaultShareScope<T = Models.DefaultShareScope>(callback?: never): Promise<T>;
    /**
       * Sets the default sharing for new filters and dashboards for a user.
       *
       * **[Permissions](#permissions) required:** Permission to access Jira. */
    setDefaultShareScope<T = Models.DefaultShareScope>(parameters: Parameters.SetDefaultShareScope | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Sets the default sharing for new filters and dashboards for a user.
       *
       * **[Permissions](#permissions) required:** Permission to access Jira. */
    setDefaultShareScope<T = Models.DefaultShareScope>(parameters?: Parameters.SetDefaultShareScope, callback?: never): Promise<T>;
    /**
       * Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None, however, share permissions are only returned for:
       *
       *  *  filters owned by the user.
       *  *  filters shared with a group that the user is a member of.
       *  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
       *  *  filters shared with a public project.
       *  *  filters shared with the public. */
    getSharePermissions<T = unknown>(parameters: Parameters.GetSharePermissions, callback: Callback<T>): Promise<void>;
    /**
       * Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None, however, share permissions are only returned for:
       *
       *  *  filters owned by the user.
       *  *  filters shared with a group that the user is a member of.
       *  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
       *  *  filters shared with a public project.
       *  *  filters shared with the public. */
    getSharePermissions<T = unknown>(parameters: Parameters.GetSharePermissions, callback?: never): Promise<T>;
    /**
       * Add a share permissions to a filter. If you add a global share permission (one for all logged-in users or the public) it will overwrite all share permissions for the filter.
       *
       * Be aware that this operation uses different objects for updating share permissions compared to [Update filter](#api-rest-api-3-filter-id-put).
       *
       * **[Permissions](#permissions) required:** *Share dashboards and filters* [global permission](https://confluence.atlassian.com/x/x4dKLg) and the user must own the filter. */
    addSharePermission<T = unknown>(parameters: Parameters.AddSharePermission, callback: Callback<T>): Promise<void>;
    /**
       * Add a share permissions to a filter. If you add a global share permission (one for all logged-in users or the public) it will overwrite all share permissions for the filter.
       *
       * Be aware that this operation uses different objects for updating share permissions compared to [Update filter](#api-rest-api-3-filter-id-put).
       *
       * **[Permissions](#permissions) required:** *Share dashboards and filters* [global permission](https://confluence.atlassian.com/x/x4dKLg) and the user must own the filter. */
    addSharePermission<T = unknown>(parameters: Parameters.AddSharePermission, callback?: never): Promise<T>;
    /**
       * Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None, however, a share permission is only returned for:
       *
       *  *  filters owned by the user.
       *  *  filters shared with a group that the user is a member of.
       *  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
       *  *  filters shared with a public project.
       *  *  filters shared with the public. */
    getSharePermission<T = Models.SharePermission>(parameters: Parameters.GetSharePermission, callback: Callback<T>): Promise<void>;
    /**
       * Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None, however, a share permission is only returned for:
       *
       *  *  filters owned by the user.
       *  *  filters shared with a group that the user is a member of.
       *  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
       *  *  filters shared with a public project.
       *  *  filters shared with the public. */
    getSharePermission<T = Models.SharePermission>(parameters: Parameters.GetSharePermission, callback?: never): Promise<T>;
    /**
       * Deletes a share permission from a filter.
       *
       * **[Permissions](#permissions) required:** Permission to access Jira and the user must own the filter. */
    deleteSharePermission<T = void>(parameters: Parameters.DeleteSharePermission, callback: Callback<T>): Promise<void>;
    /**
       * Deletes a share permission from a filter.
       *
       * **[Permissions](#permissions) required:** Permission to access Jira and the user must own the filter. */
    deleteSharePermission<T = void>(parameters: Parameters.DeleteSharePermission, callback?: never): Promise<T>;
}
