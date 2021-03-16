import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class Workflows {
    private client;
    constructor(client: Client);
    /**
       * Returns all workflows in Jira or a workflow. Deprecated, use [Get workflows paginated](#api-rest-api-2-workflow-search-get).
       *
       * If the `workflowName` parameter is specified, the workflow is returned as an object (not in an array). Otherwise, an array of workflow objects is returned.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getAllWorkflows<T = unknown>(parameters: Parameters.GetAllWorkflows | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns all workflows in Jira or a workflow. Deprecated, use [Get workflows paginated](#api-rest-api-2-workflow-search-get).
       *
       * If the `workflowName` parameter is specified, the workflow is returned as an object (not in an array). Otherwise, an array of workflow objects is returned.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getAllWorkflows<T = unknown>(parameters?: Parameters.GetAllWorkflows, callback?: never): Promise<T>;
    /**
       * Returns a [paginated](#pagination) list of published classic workflows. When workflow names are specified, details of those workflows are returned. Otherwise, all published classic workflows are returned.
       *
       * This operation does not return next-gen workflows.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getWorkflowsPaginated<T = Models.PageBeanWorkflow>(parameters: Parameters.GetWorkflowsPaginated | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns a [paginated](#pagination) list of published classic workflows. When workflow names are specified, details of those workflows are returned. Otherwise, all published classic workflows are returned.
       *
       * This operation does not return next-gen workflows.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getWorkflowsPaginated<T = Models.PageBeanWorkflow>(parameters?: Parameters.GetWorkflowsPaginated, callback?: never): Promise<T>;
}
