import { UserDetails } from './userDetails';
import { Visibility } from './visibility';
import { EntityProperty } from './entityProperty';
/**
 * Details of a worklog. */
export interface Worklog {
    /** The URL of the worklog item. */
    self?: string;
    /** Details of the user who created the worklog. */
    author?: UserDetails[];
    /** Details of the user who last updated the worklog. */
    updateAuthor?: UserDetails[];
    /** A comment about the worklog. Optional when creating or updating a worklog. */
    comment?: string;
    /** The datetime on which the worklog was created. */
    created?: string;
    /** The datetime on which the worklog was last updated. */
    updated?: string;
    /** Details about any restrictions in the visibility of the worklog. Optional when creating or updating a worklog. */
    visibility?: Visibility[];
    /** The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog. */
    started?: string;
    /** The time spent working on the issue as days (\#d), hours (\#h), or minutes (\#m or \#). Required when creating a worklog if `timeSpentSeconds` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpentSecond` is provided. */
    timeSpent?: string;
    /** The time in seconds spent working on the issue. Required when creating a worklog if `timeSpent` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpent` is provided. */
    timeSpentSeconds?: number;
    /** The ID of the worklog record. */
    id?: string;
    /** The ID of the issue this worklog is for. */
    issueId?: string;
    /** Details of properties for the worklog. Optional when creating or updating a worklog. */
    properties?: EntityProperty[];
}
