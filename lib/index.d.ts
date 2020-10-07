import * as _mixins from './mixins';
import __ from 'lodash';
declare module 'lodash' {
    interface LoDashStatic {
        defer(func: Parameters<typeof setTimeout>[0], ...args: any[]): number;
    }
}
export declare type FirecloudLoDashStatic = __.LoDashStatic & typeof _mixins;
export declare let mixins: {
    abstract: (name?: string) => import("./types-functions").Fn<never, unknown[]>;
    base64: (string: string) => string;
    callbackify: (origFn: import("./types-functions").AsyncFn<unknown, unknown[]>, options?: {
        callbackFirst?: boolean;
        errorInCallback?: boolean;
        keepCallback?: boolean;
    }) => import("./types-functions").Fn<import("./types-core").MaybePromise<void>, unknown[]>;
    consoleLogTime: <TReturn extends unknown>(label: string, fn: () => TReturn) => Promise<TReturn>;
    deferred: <TValue = unknown>(promise?: Promise<any>) => _mixins.Deferred<TValue>;
    getStackTrace: (level?: number) => import("./types").CallSite[];
    hardRejection: {
        (log?: (stack?: string) => void): void;
        default: any;
    };
    isAsyncFunction: (value: unknown) => boolean;
    isDefined: (value: unknown) => boolean;
    LimitInParallelError: typeof _mixins.LimitInParallelError;
    limitInParallel: <T extends import("./types-functions").Fn<unknown, unknown[]>>(origFn: T, options?: {
        limit?: number;
        throwErr?: boolean;
    }) => import("./types-functions").FnChangeReturnType<T, _mixins.LimitInParallelError | import("./types-core").PromiseType<ReturnType<T>>>;
    mapValuesDeep: (origFn: import("./types-functions").Fn<unknown, unknown[]>) => import("./types-functions").Fn<unknown, unknown[]>;
    memoizeTtl: (<T_1 extends import("./types-functions").Fn<unknown, unknown[]>>(ttl: number, origFn: T_1, resolver?: (...args: Parameters<T_1>) => string) => T_1 & __.MemoizedFunction) & {
        Cache: MapConstructor;
    };
    mergeConcatArrays: (object: any, ...sources: any[]) => unknown;
    mergeWithoutArrays: (object: any, ...sources: any[]) => unknown;
    naiveChecksum: (string: string) => string;
    onceIn: <T_2 extends import("./types-functions").Fn<unknown, unknown[]>>(origFn: T_2, interval: number) => T_2 & __.Cancelable;
    outdent: import("outdent").Outdent;
    promisify: (origFn: import("./types-functions").Fn<unknown, unknown[]>, options?: {
        callbackFirst?: boolean;
        errorInCallback?: boolean;
    }) => import("./types-functions").AsyncFn<unknown, unknown[]>;
    safeProxy: (env: __.Dictionary<unknown>) => __.Dictionary<unknown>;
    sleep: (ms?: number) => Promise<void>;
    throttleExp: <T_3 extends import("./types-functions").Fn<unknown, unknown[]>>(origFn: T_3, wait: number, options?: {
        leading?: boolean;
        trailing?: boolean;
        multiplier?: number;
        divider?: number;
        maxWait?: number;
    }) => T_3 & __.Cancelable;
    throttleTrue: <T_2 extends import("./types-functions").Fn<unknown, unknown[]>>(origFn: T_2, interval: number) => T_2 & __.Cancelable;
    unbase64: (string: string) => string;
};
export declare let _: FirecloudLoDashStatic;
export default _;
