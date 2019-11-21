/**
 * An optional value of type T.
 */
export type Maybe<T = unknown> =
  | T
  | undefined;

/**
 * A value or the Promise of a value of type T.
 */
export type MaybePromise<T = unknown> =
  | T
  | Promise<T>;

/**
 * A primitive value as per https://developer.mozilla.org/en-US/docs/Glossary/Primitive .
 */
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | null
  | undefined
  | symbol;

/**
 * Expand one-level-only of a type (e.g. Class) for debugging purposes.
 */
export type Expand<T> =
T extends infer TInferred
  ? {
    [TKey in keyof TInferred]: TInferred[TKey]
  }
  : never;

/**
 * Expand all-levels of a type (e.g. Class) for debugging purposes.
 */
export type ExpandDeep<T> =
T extends infer TInferred
  ? {
    [TKey in keyof TInferred]: ExpandDeep<TInferred[TKey]>
  }
  : never;

/**
 * Obtain the type of a Promise resolution.
 */
export type Unpromise<
  TMaybePromise extends any
> =
TMaybePromise extends Promise<infer TValue>
  ? TValue
  : TMaybePromise;