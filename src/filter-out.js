// see https://github.com/lodash/lodash/issues/4108

// NOTE this is monkey-patch version of lodash/remove.js,
// thus the internal references and eslint-disable

/* eslint-disable */

var arrayFilter = require('lodash/_arrayFilter'),
    baseFilter = require('lodash/_baseFilter'),
    baseIteratee = require('lodash/_baseIteratee'),
    isArray = require('lodash/isArray');

function filterOut(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  // return func(collection, baseIteratee(predicate, 3));
  predicate = function(value) {
    return !baseIteratee(predicate, 3)(value);
  };
  return func(collection, predicate);
};

module.exports = filterOut;
