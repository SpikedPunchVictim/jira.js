import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class FeatureFlags {
    private client;
    constructor(client: Client);
    /**
       * Update / insert Feature Flag data.
       *
       * Feature Flags are identified by their ID, and existing Feature Flag data for the same ID will be replaced if it exists and the updateSequenceId of existing data is less than the incoming data.
       *
       * Submissions are performed asynchronously. Submitted data will eventually be available in Jira; most updates are available within a short period of time, but may take some time during peak load and/or maintenance times. The getFeatureFlagById operation can be used to confirm that data has been stored successfully (if needed).
       *
       * In the case of multiple Feature Flags being submitted in one request, each is validated individually prior to submission. Details of which Feature Flags failed submission (if any) are available in the response object.
       *
       * Only apps that define the Feature Flags module can access this resource. This resource requires the 'WRITE' scope.
       *  */
    submitFeatureFlags<T = Models.SubmitFeatureFlags>(parameters: Parameters.SubmitFeatureFlags | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Update / insert Feature Flag data.
       *
       * Feature Flags are identified by their ID, and existing Feature Flag data for the same ID will be replaced if it exists and the updateSequenceId of existing data is less than the incoming data.
       *
       * Submissions are performed asynchronously. Submitted data will eventually be available in Jira; most updates are available within a short period of time, but may take some time during peak load and/or maintenance times. The getFeatureFlagById operation can be used to confirm that data has been stored successfully (if needed).
       *
       * In the case of multiple Feature Flags being submitted in one request, each is validated individually prior to submission. Details of which Feature Flags failed submission (if any) are available in the response object.
       *
       * Only apps that define the Feature Flags module can access this resource. This resource requires the 'WRITE' scope.
       *  */
    submitFeatureFlags<T = Models.SubmitFeatureFlags>(parameters?: Parameters.SubmitFeatureFlags, callback?: never): Promise<T>;
    /**
       * Bulk delete all Feature Flags that match the given request.
       *
       * One or more query params must be supplied to specify Properties to delete by. Optional param `_updateSequenceId` is no longer supported.
       * If more than one Property is provided, data will be deleted that matches ALL of the Properties (e.g. treated as an AND).
       * See the documentation for the submitFeatureFlags operation for more details.
       *
       * e.g. DELETE /bulkByProperties?accountId=account-123&createdBy=user-456
       *
       * Deletion is performed asynchronously. The getFeatureFlagById operation can be used to confirm that data has been deleted successfully (if needed).
       *
       * Only apps that define the Feature Flags module can access this resource. This resource requires the 'DELETE' scope.
       *  */
    deleteFeatureFlagsByProperty<T = unknown>(parameters: Parameters.DeleteFeatureFlagsByProperty | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Bulk delete all Feature Flags that match the given request.
       *
       * One or more query params must be supplied to specify Properties to delete by. Optional param `_updateSequenceId` is no longer supported.
       * If more than one Property is provided, data will be deleted that matches ALL of the Properties (e.g. treated as an AND).
       * See the documentation for the submitFeatureFlags operation for more details.
       *
       * e.g. DELETE /bulkByProperties?accountId=account-123&createdBy=user-456
       *
       * Deletion is performed asynchronously. The getFeatureFlagById operation can be used to confirm that data has been deleted successfully (if needed).
       *
       * Only apps that define the Feature Flags module can access this resource. This resource requires the 'DELETE' scope.
       *  */
    deleteFeatureFlagsByProperty<T = unknown>(parameters?: Parameters.DeleteFeatureFlagsByProperty, callback?: never): Promise<T>;
    /**
       * Retrieve the currently stored Feature Flag data for the given ID.
       *
       * The result will be what is currently stored, ignoring any pending updates or deletes.
       *
       * Only apps that define the Feature Flags module can access this resource. This resource requires the 'READ' scope.
       *  */
    getFeatureFlagById<T = Models.GetFeatureFlagById>(parameters: Parameters.GetFeatureFlagById, callback: Callback<T>): Promise<void>;
    /**
       * Retrieve the currently stored Feature Flag data for the given ID.
       *
       * The result will be what is currently stored, ignoring any pending updates or deletes.
       *
       * Only apps that define the Feature Flags module can access this resource. This resource requires the 'READ' scope.
       *  */
    getFeatureFlagById<T = Models.GetFeatureFlagById>(parameters: Parameters.GetFeatureFlagById, callback?: never): Promise<T>;
    /**
       * Delete the Feature Flag data currently stored for the given ID.
       *
       * Deletion is performed asynchronously. The getFeatureFlagById operation can be used to confirm that data has been deleted successfully (if needed).
       *
       * Only apps that define the Feature Flags module can access this resource. This resource requires the 'DELETE' scope.
       *  */
    deleteFeatureFlagById<T = unknown>(parameters: Parameters.DeleteFeatureFlagById, callback: Callback<T>): Promise<void>;
    /**
       * Delete the Feature Flag data currently stored for the given ID.
       *
       * Deletion is performed asynchronously. The getFeatureFlagById operation can be used to confirm that data has been deleted successfully (if needed).
       *
       * Only apps that define the Feature Flags module can access this resource. This resource requires the 'DELETE' scope.
       *  */
    deleteFeatureFlagById<T = unknown>(parameters: Parameters.DeleteFeatureFlagById, callback?: never): Promise<T>;
}