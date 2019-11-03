import _ from 'lodash';

/**
 * Part of `lodash-firecloud`.
 *
 * Gets the current stacktrace.
 *
 * @param {number} level The maximum stacktrace length.
 * @returns {NodeJS.CallSite[]} Returns a structured stacktrace, that is a list of CallSite objects.
 */
export let getStackTrace = function(level = Infinity) {
  let {
    prepareStackTrace,
    stackTraceLimit
  } = Error;

  let structuredStackTrace = [];
  Error.stackTraceLimit = level + 1;
  Error.prepareStackTrace = function(err, structuredStackTrace2) {
    structuredStackTrace = [
      ...structuredStackTrace2
    ];
    // ignore ourselves
    structuredStackTrace.shift();

    if (_.isFunction(prepareStackTrace)) {
      return prepareStackTrace.call(Error, err, structuredStackTrace2);
    }
  };
  // eslint-disable-next-line babel/no-unused-expressions
  Error().stack;
  Error.stackTraceLimit = stackTraceLimit;
  Error.prepareStackTrace = prepareStackTrace;

  return structuredStackTrace;
};
