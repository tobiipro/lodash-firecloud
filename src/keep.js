// see https://github.com/lodash/lodash/issues/4108

// NOTE this is monkey-patch version of lodash/remove.js,
// thus the internal references and eslint-disable

/* eslint-disable */
var baseIteratee = require('lodash/_baseIteratee'),
    basePullAt = require('lodash/_basePullAt');

function keep(array, predicate) {
  let result = [];
  if (!(array && array.length)) {
    return result;
  }
  let index = -1,
      indexes = [],
      length = array.length;

  // predicate = baseIteratee(predicate, 3);
  predicate = function(value) {
    return !baseIteratee(predicate, 3)(value);
  };
  while (++index < length) {
    let value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  basePullAt(array, indexes);
  return result;
};

module.exports = keep;
