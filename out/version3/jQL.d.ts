import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class JQL {
    private client;
    constructor(client: Client);
    /**
       * Returns reference data for JQL searches. This is a downloadable version of the documentation provided in [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ) and [Advanced searching - functions reference](https://confluence.atlassian.com/x/hgORLQ), along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None. */
    getAutoComplete<T = Models.JQLReferenceData>(callback: Callback<T>): Promise<void>;
    /**
       * Returns reference data for JQL searches. This is a downloadable version of the documentation provided in [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ) and [Advanced searching - functions reference](https://confluence.atlassian.com/x/hgORLQ), along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None. */
    getAutoComplete<T = Models.JQLReferenceData>(callback?: never): Promise<T>;
    /**
       * Returns the JQL search auto complete suggestions for a field.
       *
       * Suggestions can be obtained by providing:
       *
       *  *  `fieldName` to get a list of all values for the field.
       *  *  `fieldName` and `fieldValue` to get a list of values containing the text in `fieldValue`.
       *  *  `fieldName` and `predicateName` to get a list of all predicate values for the field.
       *  *  `fieldName`, `predicateName`, and `predicateValue` to get a list of predicate values containing the text in `predicateValue`.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None. */
    getFieldAutoCompleteForQueryString<T = Models.AutoCompleteSuggestions>(parameters: Parameters.GetFieldAutoCompleteForQueryString | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns the JQL search auto complete suggestions for a field.
       *
       * Suggestions can be obtained by providing:
       *
       *  *  `fieldName` to get a list of all values for the field.
       *  *  `fieldName` and `fieldValue` to get a list of values containing the text in `fieldValue`.
       *  *  `fieldName` and `predicateName` to get a list of all predicate values for the field.
       *  *  `fieldName`, `predicateName`, and `predicateValue` to get a list of predicate values containing the text in `predicateValue`.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None. */
    getFieldAutoCompleteForQueryString<T = Models.AutoCompleteSuggestions>(parameters?: Parameters.GetFieldAutoCompleteForQueryString, callback?: never): Promise<T>;
    /**
       * Parses and validates JQL queries.
       *
       * Validation is performed in context of the current user.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None. */
    parseJqlQueries<T = Models.ParsedJqlQueries>(parameters: Parameters.ParseJqlQueries | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Parses and validates JQL queries.
       *
       * Validation is performed in context of the current user.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None. */
    parseJqlQueries<T = Models.ParsedJqlQueries>(parameters?: Parameters.ParseJqlQueries, callback?: never): Promise<T>;
    /**
       * Converts one or more JQL queries with user identifiers (username or user key) to equivalent JQL queries with account IDs.
       *
       * You may wish to use this operation if your system stores JQL queries and you want to make them GDPR-compliant. For more information about GDPR-related changes, see the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/).
       *
       * **[Permissions](#permissions) required:** Permission to access Jira. */
    migrateQueries<T = Models.ConvertedJQLQueries>(parameters: Parameters.MigrateQueries | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Converts one or more JQL queries with user identifiers (username or user key) to equivalent JQL queries with account IDs.
       *
       * You may wish to use this operation if your system stores JQL queries and you want to make them GDPR-compliant. For more information about GDPR-related changes, see the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/).
       *
       * **[Permissions](#permissions) required:** Permission to access Jira. */
    migrateQueries<T = Models.ConvertedJQLQueries>(parameters?: Parameters.MigrateQueries, callback?: never): Promise<T>;
}
