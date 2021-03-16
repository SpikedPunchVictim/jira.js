import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
export declare class Avatars {
    private client;
    constructor(client: Client);
    /**
       * Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None. */
    getAllSystemAvatars<T = Models.SystemAvatars>(parameters: Parameters.GetAllSystemAvatars, callback: Callback<T>): Promise<void>;
    /**
       * Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None. */
    getAllSystemAvatars<T = Models.SystemAvatars>(parameters: Parameters.GetAllSystemAvatars, callback?: never): Promise<T>;
    /**
       * Returns the system and custom avatars for a project or issue type.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None. */
    getAvatars<T = Models.Avatars>(parameters: Parameters.GetAvatars, callback: Callback<T>): Promise<void>;
    /**
       * Returns the system and custom avatars for a project or issue type.
       *
       * This operation can be accessed anonymously.
       *
       * **[Permissions](#permissions) required:** None. */
    getAvatars<T = Models.Avatars>(parameters: Parameters.GetAvatars, callback?: never): Promise<T>;
    /**
       * Loads a custom avatar for a project or issue type.
       *
       * Specify the avatar's local file location in the body of the request. Also, include the following headers:
       *
       *  *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).
       *  *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.
       *
       * For example:
       * `curl --request POST `
       *
       * `--user email@example.com:<api_token> `
       *
       * `--header 'X-Atlassian-Token: no-check' `
       *
       * `--header 'Content-Type: image/< image_type>' `
       *
       * `--data-binary "<@/path/to/file/with/your/avatar>" `
       *
       * `--url 'https://your-domain.atlassian.net/rest/api/3/universal_avatar/type/{type}/owner/{entityId}'`
       *
       * The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square's sides is set to the smaller of the height or width of the image.
       *
       * The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.
       *
       * After creating the avatar use:
       *
       *  *  [Update issue type](#api-rest-api-3-issuetype-id-put) to set it as the issue type's displayed avatar.
       *  *  [Set project avatar](#api-rest-api-3-project-projectIdOrKey-avatar-put) to set it as the project's displayed avatar.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    storeAvatar<T = Models.Avatar>(parameters: Parameters.StoreAvatar, callback: Callback<T>): Promise<void>;
    /**
       * Loads a custom avatar for a project or issue type.
       *
       * Specify the avatar's local file location in the body of the request. Also, include the following headers:
       *
       *  *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).
       *  *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.
       *
       * For example:
       * `curl --request POST `
       *
       * `--user email@example.com:<api_token> `
       *
       * `--header 'X-Atlassian-Token: no-check' `
       *
       * `--header 'Content-Type: image/< image_type>' `
       *
       * `--data-binary "<@/path/to/file/with/your/avatar>" `
       *
       * `--url 'https://your-domain.atlassian.net/rest/api/3/universal_avatar/type/{type}/owner/{entityId}'`
       *
       * The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square's sides is set to the smaller of the height or width of the image.
       *
       * The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.
       *
       * After creating the avatar use:
       *
       *  *  [Update issue type](#api-rest-api-3-issuetype-id-put) to set it as the issue type's displayed avatar.
       *  *  [Set project avatar](#api-rest-api-3-project-projectIdOrKey-avatar-put) to set it as the project's displayed avatar.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    storeAvatar<T = Models.Avatar>(parameters: Parameters.StoreAvatar, callback?: never): Promise<T>;
    /**
       * Deletes an avatar from a project or issue type.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    deleteAvatar<T = void>(parameters: Parameters.DeleteAvatar, callback: Callback<T>): Promise<void>;
    /**
       * Deletes an avatar from a project or issue type.
       *
       * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
    deleteAvatar<T = void>(parameters: Parameters.DeleteAvatar, callback?: never): Promise<T>;
}