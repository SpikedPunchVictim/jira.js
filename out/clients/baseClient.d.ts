import type { Client } from './client';
import type { Callback } from '../callback';
import type { Config } from '../config';
import type { RequestConfig } from '../requestConfig';
export declare class BaseClient implements Client {
    protected readonly config: Config;
    private instance;
    constructor(config: Config);
    protected paramSerializer(parameters: Record<string, any>): string;
    protected encode(value: string): string;
    protected removeUndefinedProperties(obj: Record<string, any>): Record<string, any>;
    sendRequest<T>(requestConfig: RequestConfig, callback: never, ignore?: Partial<any>): Promise<T>;
    sendRequest<T>(requestConfig: RequestConfig, callback: Callback<T>, ignore?: Partial<any>): Promise<void>;
}
