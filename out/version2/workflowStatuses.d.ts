import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class WorkflowStatuses {
    private client;
    constructor(client: Client);
    /**
       * Returns a list of all statuses associated with workflows.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None. */
    getStatuses<T = unknown>(callback: Callback<T>): Promise<void>;
    /**
       * Returns a list of all statuses associated with workflows.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None. */
    getStatuses<T = unknown>(callback?: never): Promise<T>;
    /**
       * Returns a status. The status must be associated with a workflow to be returned.
       *
       * If a name is used on more than one status, only the status found first is returned. Therefore, identifying the status by its ID may be preferable.
       *
       * This operation can be accessed anonymously.
       *
       * [Permissions](#permissions) required: None. */
    getStatus<T = Models.StatusDetails>(parameters: Parameters.GetStatus, callback: Callback<T>): Promise<void>;
    /**
       * Returns a status. The status must be associated with a workflow to be returned.
       *
       * If a name is used on more than one status, only the status found first is returned. Therefore, identifying the status by its ID may be preferable.
       *
       * This operation can be accessed anonymously.
       *
       * [Permissions](#permissions) required: None. */
    getStatus<T = Models.StatusDetails>(parameters: Parameters.GetStatus, callback?: never): Promise<T>;
}
