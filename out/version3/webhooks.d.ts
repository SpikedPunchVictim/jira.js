import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class Webhooks {
    private client;
    constructor(client: Client);
    /**
       * Returns a [paginated](#pagination) list of the webhooks registered by the calling app.
       *
       * **[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation. */
    getDynamicWebhooksForApp<T = Models.PageBeanWebhook>(parameters: Parameters.GetDynamicWebhooksForApp | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns a [paginated](#pagination) list of the webhooks registered by the calling app.
       *
       * **[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation. */
    getDynamicWebhooksForApp<T = Models.PageBeanWebhook>(parameters?: Parameters.GetDynamicWebhooksForApp, callback?: never): Promise<T>;
    /**
       * Registers webhooks.
       *
       * **[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation. */
    registerDynamicWebhooks<T = Models.ContainerForRegisteredWebhooks>(parameters: Parameters.RegisterDynamicWebhooks | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Registers webhooks.
       *
       * **[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation. */
    registerDynamicWebhooks<T = Models.ContainerForRegisteredWebhooks>(parameters?: Parameters.RegisterDynamicWebhooks, callback?: never): Promise<T>;
    /**
       * Removes webhooks by ID. Only webhooks registered by the calling Connect app are removed. If webhooks created by other apps are specified, they are ignored.
       *
       * **[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation. */
    deleteWebhookById<T = unknown>(parameters: Parameters.DeleteWebhookById | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Removes webhooks by ID. Only webhooks registered by the calling Connect app are removed. If webhooks created by other apps are specified, they are ignored.
       *
       * **[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation. */
    deleteWebhookById<T = unknown>(parameters?: Parameters.DeleteWebhookById, callback?: never): Promise<T>;
    /**
       * Returns webhooks that have recently failed to be delivered to the requesting app after the maximum number of retries.
       *
       * After 72 hours the failure may no longer be returned by this operation.
       *
       * The oldest failure is returned first.
       *
       * This method uses a cursor-based pagination. To request the next page use the failure time of the last webhook on the list as the `failedAfter` value or use the URL provided in `next`.
       *
       * **[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation. */
    getFailedWebhooks<T = Models.FailedWebhooks>(parameters: Parameters.GetFailedWebhooks | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns webhooks that have recently failed to be delivered to the requesting app after the maximum number of retries.
       *
       * After 72 hours the failure may no longer be returned by this operation.
       *
       * The oldest failure is returned first.
       *
       * This method uses a cursor-based pagination. To request the next page use the failure time of the last webhook on the list as the `failedAfter` value or use the URL provided in `next`.
       *
       * **[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation. */
    getFailedWebhooks<T = Models.FailedWebhooks>(parameters?: Parameters.GetFailedWebhooks, callback?: never): Promise<T>;
    /**
       * Webhooks registered through the REST API expire after 30 days. Call this resource periodically to keep them alive.
       *
       * Unrecognized webhook IDs (nonexistent or belonging to other apps) are ignored.
       *
       * **[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation. */
    refreshWebhooks<T = Models.WebhooksExpirationDate>(parameters: Parameters.RefreshWebhooks | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Webhooks registered through the REST API expire after 30 days. Call this resource periodically to keep them alive.
       *
       * Unrecognized webhook IDs (nonexistent or belonging to other apps) are ignored.
       *
       * **[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation. */
    refreshWebhooks<T = Models.WebhooksExpirationDate>(parameters?: Parameters.RefreshWebhooks, callback?: never): Promise<T>;
}
