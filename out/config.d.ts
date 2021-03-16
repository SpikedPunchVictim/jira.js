import { AxiosError } from 'axios';
import { UtilityTypes } from './utilityTypes';
import { RequestConfig } from './requestConfig';
export interface Config {
    host: string;
    strictGDPR?: boolean;
    noCheckAtlassianToken?: boolean;
    baseRequestConfig?: Config.BaseRequestConfig;
    authentication?: Config.Authentication;
    middlewares?: Config.Middlewares;
}
export declare namespace Config {
    type BaseRequestConfig = RequestConfig;
    type Error = AxiosError;
    type Authentication = UtilityTypes.XOR<{
        jwt: Authentication.JWT;
    }, UtilityTypes.XOR<{
        oauth: Authentication.OAuth;
    }, UtilityTypes.XOR<{
        basic: Authentication.Basic;
    }, {
        oauth2: Authentication.OAuth2;
    }>>>;
    interface Middlewares {
        onError?: Config.Middlewares.OnErrorHandler;
        onResponse?: Config.Middlewares.OnResponseHandler;
    }
    namespace Middlewares {
        type OnErrorHandler = (error: Config.Error) => void;
        type OnResponseHandler = (data: any) => void;
    }
    namespace Authentication {
        type JWT = {
            /** The key from the app descriptor. */
            issuer: string;
            /** The sharedsecret key received during the app installation handshake */
            secret: string;
            /** Token expiry time (default 3 minutes after issuing) */
            expiryTimeSeconds?: number;
        };
        type Basic = UtilityTypes.XOR<{
            email: string;
            apiToken: string;
        }, {
            username: string;
            password: string;
        }>;
        interface OAuth {
            consumerKey: string;
            consumerSecret: string;
            accessToken: string;
            tokenSecret: string;
        }
        type OAuth2 = {
            accessToken: string;
        };
    }
}
