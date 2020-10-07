import { AsyncFn, CallbackFn } from '../types';
/**
 * Part of `lodash-firecloud`.
 *
 * Convert Promise into callback-like function.
 *
 * @param origFn Promise to callbackify.
 * @param options Options object.
 * @param [options.callbackFirst=false] Specifies if callback is a first arg.
 * @param [options.errorInCallback=true] Specifies if the first arg of callback is an error.
 * @param [options.keepCallback=false] Specifies if the callback arg should be passed to the Promise.
 * @returns Returns a callback-like function wrapping original `fn`.
 */
export declare let callbackify: (origFn: AsyncFn, options?: {
    callbackFirst?: boolean;
    errorInCallback?: boolean;
    keepCallback?: boolean;
}) => CallbackFn;
