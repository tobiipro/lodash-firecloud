// see https://github.com/lodash/lodash/issues/4108

export let keep = function(array, predicate) {
  // eslint-disable-next-line consistent-this, no-invalid-this
  let _ = this;

  predicate = _.negate(_.iteratee(predicate));

  return _.remove(array, predicate);
};

export default keep;
