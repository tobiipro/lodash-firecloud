import lodash from 'lodash';
export = lodash;

declare module "lodash" {
  interface LoDashStatic {
    /**
     * Part of `lodash-firecloud`.
     *
     * Create a stub function that throws an error when invoked. Supposed to be overriden.
     *
     * @param {string} [name='it] Name of the method to be abstracted.
     * @returns Returns a function that throws error when invoked.
     */
    abstract(name: string = 'it'): () => void;

    /**
     * Part of `lodash-firecloud`.
     *
     * Always return a Promise out of a Promise-like (passthrough) or something else (promisify).
     * Useful for cases where you allow for a function to return a Promise or not.
     * e.g. await alwaysPromise(fn(arg1, arg2));
     *
     * @param maybePromiseLike An instance of a Promise-like or just about anything.
     * @returns Returns a Promise, the one given or one that resolve.
     */
    alwaysPromise(maybePromiseLike: any): Promise;

    /**
     * Part of `lodash-firecloud`.
     *
     * Convert a string to Base64 format.
     * @param {string} string Input string.
     * @returns {string} Returns Base64-encoded string.
     */
    base64(string: string): string;

    /**
     * Part of `lodash-firecloud`.
     *
     * Log execution time of a function.
     *
     * @param {string} label Label for current measurement, that will be displayed in the console.
     * @param fn A function to measure execution time of.
     */
    consoleLogTime(label: string, fn: () => any): Promise<void>;

    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns falsy for. The
     * predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns the new filtered array.
     */
    filterOut(
      collection: string | null | undefined,
      predicate?: StringIterator<boolean>
    ): string[];

    /**
     * @see _.filterOut
     */
    filterOut<T, S extends T>(
      collection: List<T> | null | undefined,
      predicate: ListIteratorTypeGuard<T, S>
    ): S[];

    /**
     * @see _.filterOut
     */
    filterOut<T>(
      collection: List<T> | null | undefined,
      predicate?: ListIterateeCustom<T, boolean>
    ): T[];

    /**
     * @see _.filterOut
     */
    filterOut<T extends object, S extends T[keyof T]>(
      collection: T | null | undefined,
      predicate: ObjectIteratorTypeGuard<T, S>
    ): S[];

    /**
     * @see _.filterOut
     */
    filterOut<T extends object>(
      collection: T | null | undefined,
      predicate?: ObjectIterateeCustom<T, boolean>
    ): Array<T[keyof T]>;

    /**
     * Keeps all elements from array that predicate returns truthy for and returns an array of the removed
     * elements. The predicate is invoked with three arguments: (value, index, array).
     *
     * Note: Unlike _.filter, this method mutates array.
     *
     * @param array The array to modify.
     * @param predicate The function invoked per iteration.
     * @return Returns the new array of removed elements.
     */
    keep<T>(array: List<T>, predicate?: ListIteratee<T>): T[];

    /**
     * Part of `lodash-firecloud`.
     *
     * Map an object and all of its plain-object properties' values depth-wise with a given `fn`.
     *
     * @param fn A function to process object and each of its plain-object properties.
     * Should return a value (processed object).
     * @returns Returns a function that accepts an object, on which `fn` will be invoked with a list of `args`.
     */
    mapValuesDeep(fn: (...args: any[]) => any): (obj: any, ...fnArgs: any[]) => any;

    /**
     * Part of `lodash-firecloud`.
     *
     * Calculate a naïve checksum of a string.
     *
     * @param {string} string String to calculate checksum of.
     * @returns {string} Returns checksum.
     */
    naiveChecksum(string: string): string;

    /**
     * Part of `lodash-firecloud`.
     *
     * A "true _.throttle with 'trailing': false"
     * More lightweight version which does not allocate unnecessary timer,
     * comparing to lodash func (which invokes _.debounce under the hood)
     *
     * @param fn Function to throttle.
     * @param interval Throttling interval.
     * @returns Returns a throttled function.
     */
    onceIn(fn: (...args: any[]) => any, interval: number): (...args: any[]) => any;

    // A proper way to write this definition
    // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/adone/glosses/promise.d.ts
    /**
     * Part of `lodash-firecloud`.
     *
     * Convert callback-like function into Promise.
     *
     * @param fn Callback-based function to promisify.
     * @param options Options object.
     * @param {boolean} [options.callbackFirst='false'] Specifies if callback is a first arg.
     * @param {boolean} [options.errorInCallback='true'] Specifies if the first arg of callback is an error.
     * @returns Returns a Promise object wrapping original `fn`.
     */
    promisify(fn: (...args: any[]) => any, options: object): (...args: any[]) => any;

    /**
     * Part of `lodash-firecloud`.
     *
     * Return a promise that is resolved after the desired sleep time.
     *
     * @param {integer} ms=0 Number of milliseconds to sleep.
     * @returns {Promise} Returns the.
     */
    sleep(ms: integer): Promise<void>;

    /**
     * Part of `lodash-firecloud`.
     *
     * Decode Base64 string.
     *
     * @param {string} string Input string in Base64 format.
     * @returns {string} Returns decoded string.
     */
    unbase64(string: string): string;
  }
}
