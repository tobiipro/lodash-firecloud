import _ from '../lib';

describe('filterOut', function() {
  it('returns the opposite of filter for the doc examples', function() {
    let users = [
      {user: 'barney', age: 36, active: true},
      {user: 'fred', age: 40, active: false}
    ];

    let filter1 = _.filter(users, function(o) {
      return !o.active;
    });
    // => objects for ['fred']
    let filterOut1 = _.filterOut(users, function(o) {
      return !o.active;
    });

    // The `_.matches` iteratee shorthand.
    let filter2 = _.filter(users, {age: 36, active: true});
    // => objects for ['barney']
    let filterOut2 = _.filterOut(users, {age: 36, active: true});

    // The `_.matchesProperty` iteratee shorthand.
    let filter3 = _.filter(users, ['active', false]);
    // => objects for ['fred']
    let filterOut3 = _.filterOut(users, ['active', false]);

    // The `_.property` iteratee shorthand.
    let filter4 = _.filter(users, 'active');
    // => objects for ['barney']
    let filterOut4 = _.filterOut(users, 'active');

    expect(filterOut1).toEqual(_.difference(users, filter1));
    expect(filterOut2).toEqual(_.difference(users, filter2));
    expect(filterOut3).toEqual(_.difference(users, filter3));
    expect(filterOut4).toEqual(_.difference(users, filter4));
  });
});
