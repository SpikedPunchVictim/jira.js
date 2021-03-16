import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class Issues {
    private client;
    constructor(client: Client);
    /**
       * Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask. A transition may be applied, to move the issue or subtask to a workflow step other than the default start step, and issue properties set.
       *
       * The content of the issue or subtask is defined using `update` and `fields`. The fields that can be set in the issue or subtask are determined using the [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get). These are the same fields that appear on the issue's create screen.
       *
       * Creating a subtask differs from creating an issue as follows:
       *
       *  *  `issueType` must be set to a subtask issue type (use [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get) to find subtask issue types).
       *  *  `parent` must contain the ID or key of the parent issue.
       *
       * **[Permissions](#permissions) required:** *Browse projects* and *Create issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project in which the issue or subtask is created. */
    createIssue<T = Models.CreatedIssue>(parameters: Parameters.CreateIssue | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask. A transition may be applied, to move the issue or subtask to a workflow step other than the default start step, and issue properties set.
       *
       * The content of the issue or subtask is defined using `update` and `fields`. The fields that can be set in the issue or subtask are determined using the [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get). These are the same fields that appear on the issue's create screen.
       *
       * Creating a subtask differs from creating an issue as follows:
       *
       *  *  `issueType` must be set to a subtask issue type (use [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get) to find subtask issue types).
       *  *  `parent` must contain the ID or key of the parent issue.
       *
       * **[Permissions](#permissions) required:** *Browse projects* and *Create issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project in which the issue or subtask is created. */
    createIssue<T = Models.CreatedIssue>(parameters?: Parameters.CreateIssue, callback?: never): Promise<T>;
    /**
       * Creates issues and, where the option to create subtasks is enabled in Jira, subtasks. Transitions may be applied, to move the issues or subtasks to a workflow step other than the default start step, and issue properties set.
       *
       * The content of each issue or subtask is defined using `update` and `fields`. The fields that can be set in the issue or subtask are determined using the [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get). These are the same fields that appear on the issues' create screens.
       *
       * Creating a subtask differs from creating an issue as follows:
       *
       *  *  `issueType` must be set to a subtask issue type (use [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get) to find subtask issue types).
       *  *  `parent` the must contain the ID or key of the parent issue.
       *
       * **[Permissions](#permissions) required:** *Browse projects* and *Create issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project in which each issue or subtask is created. */
    createIssues<T = Models.CreatedIssues>(parameters: Parameters.CreateIssues | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Creates issues and, where the option to create subtasks is enabled in Jira, subtasks. Transitions may be applied, to move the issues or subtasks to a workflow step other than the default start step, and issue properties set.
       *
       * The content of each issue or subtask is defined using `update` and `fields`. The fields that can be set in the issue or subtask are determined using the [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get). These are the same fields that appear on the issues' create screens.
       *
       * Creating a subtask differs from creating an issue as follows:
       *
       *  *  `issueType` must be set to a subtask issue type (use [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get) to find subtask issue types).
       *  *  `parent` the must contain the ID or key of the parent issue.
       *
       * **[Permissions](#permissions) required:** *Browse projects* and *Create issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project in which each issue or subtask is created. */
    createIssues<T = Models.CreatedIssues>(parameters?: Parameters.CreateIssues, callback?: never): Promise<T>;
    /**
       * Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in [ Create issue](#api-rest-api-2-issue-post) and [Create issues](#api-rest-api-2-issue-bulk-post).
       *
       * The request can be restricted to specific projects or issue types using the query parameters. The response will contain information for the valid projects, issue types, or project and issue type combinations requested. Note that invalid project, issue type, or project and issue type combinations do not generate errors.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) in the requested projects. */
    getCreateIssueMeta<T = Models.IssueCreateMetadata>(parameters: Parameters.GetCreateIssueMeta | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in [ Create issue](#api-rest-api-2-issue-post) and [Create issues](#api-rest-api-2-issue-bulk-post).
       *
       * The request can be restricted to specific projects or issue types using the query parameters. The response will contain information for the valid projects, issue types, or project and issue type combinations requested. Note that invalid project, issue type, or project and issue type combinations do not generate errors.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) in the requested projects. */
    getCreateIssueMeta<T = Models.IssueCreateMetadata>(parameters?: Parameters.GetCreateIssueMeta, callback?: never): Promise<T>;
    /**
       * Returns the details for an issue.
       *
       * The issue is identified by its ID or key, however, if the identifier doesn't match an issue, a case-insensitive search and check for moved issues is performed. If a matching issue is found its details are returned, a 302 or other redirect is **not** returned. The issue key returned in the response is the key of the issue found.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. */
    getIssue<T = Models.IssueBean>(parameters: Parameters.GetIssue, callback: Callback<T>): Promise<void>;
    /**
       * Returns the details for an issue.
       *
       * The issue is identified by its ID or key, however, if the identifier doesn't match an issue, a case-insensitive search and check for moved issues is performed. If a matching issue is found its details are returned, a 302 or other redirect is **not** returned. The issue key returned in the response is the key of the issue found.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. */
    getIssue<T = Models.IssueBean>(parameters: Parameters.GetIssue, callback?: never): Promise<T>;
    /**
       * Edits an issue. A transition may be applied and issue properties updated as part of the edit.
       *
       * The edits to the issue's fields are defined using `update` and `fields`. The fields that can be edited are determined using [ Get edit issue metadata](#api-rest-api-2-issue-issueIdOrKey-editmeta-get).
       *
       * The parent field may be set by key or ID. For standard issue types, the parent may be removed by setting `update.parent.set.none` to *true*.
       *
       * Connect app users with admin permissions (from user permissions and app scopes) can override the screen security configuration using `overrideScreenSecurity` and `overrideEditableFlag`.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse projects* and *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. */
    editIssue<T = void>(parameters: Parameters.EditIssue, callback: Callback<T>): Promise<void>;
    /**
       * Edits an issue. A transition may be applied and issue properties updated as part of the edit.
       *
       * The edits to the issue's fields are defined using `update` and `fields`. The fields that can be edited are determined using [ Get edit issue metadata](#api-rest-api-2-issue-issueIdOrKey-editmeta-get).
       *
       * The parent field may be set by key or ID. For standard issue types, the parent may be removed by setting `update.parent.set.none` to *true*.
       *
       * Connect app users with admin permissions (from user permissions and app scopes) can override the screen security configuration using `overrideScreenSecurity` and `overrideEditableFlag`.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse projects* and *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. */
    editIssue<T = void>(parameters: Parameters.EditIssue, callback?: never): Promise<T>;
    /**
       * Deletes an issue.
       *
       * An issue cannot be deleted if it has one or more subtasks. To delete an issue with subtasks, set `deleteSubtasks`. This causes the issue's subtasks to be deleted with the issue.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse projects* and *Delete issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. */
    deleteIssue<T = void>(parameters: Parameters.DeleteIssue, callback: Callback<T>): Promise<void>;
    /**
       * Deletes an issue.
       *
       * An issue cannot be deleted if it has one or more subtasks. To delete an issue with subtasks, set `deleteSubtasks`. This causes the issue's subtasks to be deleted with the issue.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse projects* and *Delete issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. */
    deleteIssue<T = void>(parameters: Parameters.DeleteIssue, callback?: never): Promise<T>;
    /**
       * Assigns an issue to a user. Use this operation when the calling user does not have the *Edit Issues* permission but has the *Assign issue* permission for the project that the issue is in.
       *
       * If `name` or `accountId` is set to:
       *
       *  *  `"-1"`, the issue is assigned to the default assignee for the project.
       *  *  `null`, the issue is set to unassigned.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse Projects* and *Assign Issues* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. */
    assignIssue<T = void>(parameters: Parameters.AssignIssue, callback: Callback<T>): Promise<void>;
    /**
       * Assigns an issue to a user. Use this operation when the calling user does not have the *Edit Issues* permission but has the *Assign issue* permission for the project that the issue is in.
       *
       * If `name` or `accountId` is set to:
       *
       *  *  `"-1"`, the issue is assigned to the default assignee for the project.
       *  *  `null`, the issue is set to unassigned.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse Projects* and *Assign Issues* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. */
    assignIssue<T = void>(parameters: Parameters.AssignIssue, callback?: never): Promise<T>;
    /**
       * Returns a [paginated](#pagination) list of all changelogs for an issue sorted by date, starting from the oldest.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. */
    getChangeLogs<T = Models.PageBeanChangelog>(parameters: Parameters.GetChangeLogs, callback: Callback<T>): Promise<void>;
    /**
       * Returns a [paginated](#pagination) list of all changelogs for an issue sorted by date, starting from the oldest.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. */
    getChangeLogs<T = Models.PageBeanChangelog>(parameters: Parameters.GetChangeLogs, callback?: never): Promise<T>;
    /**
       * Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in [Edit issue](#api-rest-api-2-issue-issueIdOrKey-put).
       *
       * Connect app users with admin permissions (from user permissions and app scopes) can return additional details using:
       *
       *  *  `overrideScreenSecurity` Returns hidden fields.
       *  *  `overrideEditableFlag` Returns uneditable fields. For example, where an issue has a workflow status of closed none of its fields are editable.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
       *
       * Note: For any fields to be editable the user must have the *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the issue. */
    getEditIssueMeta<T = Models.IssueUpdateMetadata>(parameters: Parameters.GetEditIssueMeta, callback: Callback<T>): Promise<void>;
    /**
       * Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in [Edit issue](#api-rest-api-2-issue-issueIdOrKey-put).
       *
       * Connect app users with admin permissions (from user permissions and app scopes) can return additional details using:
       *
       *  *  `overrideScreenSecurity` Returns hidden fields.
       *  *  `overrideEditableFlag` Returns uneditable fields. For example, where an issue has a workflow status of closed none of its fields are editable.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
       *
       * Note: For any fields to be editable the user must have the *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the issue. */
    getEditIssueMeta<T = Models.IssueUpdateMetadata>(parameters: Parameters.GetEditIssueMeta, callback?: never): Promise<T>;
    /**
       * Creates an email notification for an issue and adds it to the mail queue.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. */
    notify<T = void>(parameters: Parameters.Notify, callback: Callback<T>): Promise<void>;
    /**
       * Creates an email notification for an issue and adds it to the mail queue.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. */
    notify<T = void>(parameters: Parameters.Notify, callback?: never): Promise<T>;
    /**
       * Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue's status.
       *
       * Note, if a request is made for a transition that does not exist or cannot be performed on the issue, given its status, the response will return any empty transitions list.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required: A list or transition is returned only when the user has:**
       *
       *  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
       *
       * However, if the user does not have the *Transition issues* [ project permission](https://confluence.atlassian.com/x/yodKLg) the response will not list any transitions. */
    getTransitions<T = Models.Transitions>(parameters: Parameters.GetTransitions, callback: Callback<T>): Promise<void>;
    /**
       * Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue's status.
       *
       * Note, if a request is made for a transition that does not exist or cannot be performed on the issue, given its status, the response will return any empty transitions list.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required: A list or transition is returned only when the user has:**
       *
       *  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
       *
       * However, if the user does not have the *Transition issues* [ project permission](https://confluence.atlassian.com/x/yodKLg) the response will not list any transitions. */
    getTransitions<T = Models.Transitions>(parameters: Parameters.GetTransitions, callback?: never): Promise<T>;
    /**
       * Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen.
       *
       * sortByCategory To update the fields on the transition screen, specify the fields in the `fields` or `update` parameters in the request body. Get details about the fields using [ Get transitions](#api-rest-api-2-issue-issueIdOrKey-transitions-get) with the `transitions.fields` expand.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse projects* and *Transition issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. */
    doTransition<T = void>(parameters: Parameters.DoTransition, callback: Callback<T>): Promise<void>;
    /**
       * Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen.
       *
       * sortByCategory To update the fields on the transition screen, specify the fields in the `fields` or `update` parameters in the request body. Get details about the fields using [ Get transitions](#api-rest-api-2-issue-issueIdOrKey-transitions-get) with the `transitions.fields` expand.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:**
       *
       *  *  *Browse projects* and *Transition issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
       *  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. */
    doTransition<T = void>(parameters: Parameters.DoTransition, callback?: never): Promise<T>;
}