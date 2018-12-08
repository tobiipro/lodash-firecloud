import _ from '../lib';

describe('keep', function() {
  it('returns the opposite of remove for the doc examples', function() {
    let array = [1, 2, 3, 4];
    let sameArray = _.clone(array);

    let evens = _.remove(array, function(n) {
      return n % 2 === 0;
    });

    let odds = _.keep(sameArray, function(n) {
      return n % 2 === 0;
    });

    expect(odds).toEqual(array);
    expect(sameArray).toEqual(evens);
  });
});
