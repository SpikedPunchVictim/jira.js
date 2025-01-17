import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class IssueFieldConfigurations {
    private client;
    constructor(client: Client);
    /**
       * Returns a [paginated](#pagination) list of all field configurations.
       *
       * Only field configurations used in classic projects are returned.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getAllFieldConfigurations<T = Models.PageBeanFieldConfiguration>(parameters: Parameters.GetAllFieldConfigurations | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns a [paginated](#pagination) list of all field configurations.
       *
       * Only field configurations used in classic projects are returned.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getAllFieldConfigurations<T = Models.PageBeanFieldConfiguration>(parameters?: Parameters.GetAllFieldConfigurations, callback?: never): Promise<T>;
    /**
       * Returns a [paginated](#pagination) list of all fields for a configuration.
       *
       * Only the fields from configurations used in classic projects are returned.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getFieldConfigurationItems<T = Models.PageBeanFieldConfigurationItem>(parameters: Parameters.GetFieldConfigurationItems, callback: Callback<T>): Promise<void>;
    /**
       * Returns a [paginated](#pagination) list of all fields for a configuration.
       *
       * Only the fields from configurations used in classic projects are returned.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getFieldConfigurationItems<T = Models.PageBeanFieldConfigurationItem>(parameters: Parameters.GetFieldConfigurationItems, callback?: never): Promise<T>;
    /**
       * Returns a [paginated](#pagination) list of field configuration schemes.
       *
       * Only field configuration schemes used in classic projects are returned.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getAllFieldConfigurationSchemes<T = Models.PageBeanFieldConfigurationScheme>(parameters: Parameters.GetAllFieldConfigurationSchemes | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns a [paginated](#pagination) list of field configuration schemes.
       *
       * Only field configuration schemes used in classic projects are returned.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getAllFieldConfigurationSchemes<T = Models.PageBeanFieldConfigurationScheme>(parameters?: Parameters.GetAllFieldConfigurationSchemes, callback?: never): Promise<T>;
    /**
       * Returns a [paginated](#pagination) list of field configuration issue type items.
       *
       * Only items used in classic projects are returned.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getFieldConfigurationSchemeMappings<T = Models.PageBeanFieldConfigurationIssueTypeItem>(parameters: Parameters.GetFieldConfigurationSchemeMappings | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Returns a [paginated](#pagination) list of field configuration issue type items.
       *
       * Only items used in classic projects are returned.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getFieldConfigurationSchemeMappings<T = Models.PageBeanFieldConfigurationIssueTypeItem>(parameters?: Parameters.GetFieldConfigurationSchemeMappings, callback?: never): Promise<T>;
    /**
       * Returns a [paginated](#pagination) list of field configuration schemes and, for each scheme, a list of the projects that use it.
       *
       * The list is sorted by field configuration scheme ID. The first item contains the list of project IDs assigned to the default field configuration scheme.
       *
       * Only field configuration schemes used in classic projects are returned.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getFieldConfigurationSchemeProjectMapping<T = Models.PageBeanFieldConfigurationSchemeProjects>(parameters: Parameters.GetFieldConfigurationSchemeProjectMapping, callback: Callback<T>): Promise<void>;
    /**
       * Returns a [paginated](#pagination) list of field configuration schemes and, for each scheme, a list of the projects that use it.
       *
       * The list is sorted by field configuration scheme ID. The first item contains the list of project IDs assigned to the default field configuration scheme.
       *
       * Only field configuration schemes used in classic projects are returned.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    getFieldConfigurationSchemeProjectMapping<T = Models.PageBeanFieldConfigurationSchemeProjects>(parameters: Parameters.GetFieldConfigurationSchemeProjectMapping, callback?: never): Promise<T>;
    /**
       * Assigns a field configuration scheme to a project. If the field configuration scheme ID is `null`, the operation assigns the default field configuration scheme.
       *
       * Field configuration schemes can only be assigned to classic projects.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    assignFieldConfigurationSchemeToProject<T = void>(parameters: Parameters.AssignFieldConfigurationSchemeToProject | undefined, callback: Callback<T>): Promise<void>;
    /**
       * Assigns a field configuration scheme to a project. If the field configuration scheme ID is `null`, the operation assigns the default field configuration scheme.
       *
       * Field configuration schemes can only be assigned to classic projects.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    assignFieldConfigurationSchemeToProject<T = void>(parameters?: Parameters.AssignFieldConfigurationSchemeToProject, callback?: never): Promise<T>;
}
