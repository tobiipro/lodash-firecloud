// see https://github.com/lodash/lodash/issues/4108

export let filterOut = function(collection, predicate) {
  // eslint-disable-next-line consistent-this, no-invalid-this
  let _ = this;

  predicate = _.negate(_.iteratee(predicate));
  return _.filter(collection, predicate);
};

export default filterOut;
