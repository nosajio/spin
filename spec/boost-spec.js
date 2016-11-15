const test = require('tape');
const boost = require('../src/lib/boost');

test('boost', function (assert) {
  assert.plan(1);
  const color = '#185F00';
  const expectedColor = [62, 250, 0];
  const boostedColor = boost(color)
  assert.equal(boostedColor, expectedColor, 'Boosted value is the same as expected color');
});
