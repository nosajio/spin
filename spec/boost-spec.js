const test = require('tape');
const boost = require('../src/lib/boost');

test('boost', function (assert) {
  const color1 = '#626238';
  const color2 = '#0fd0ad';
  const color3 = '#365265';
  const expectedColor1 = [211, 211, 95];
  const expectedColor2 = [131, 246, 225];
  const expectedColor3 = [92, 165, 214];
  const boostedColor1 = boost(color1)
  const boostedColor2 = boost(color2)
  const boostedColor3 = boost(color3)
  assert.plan(3);
  assert.deepEqual(boostedColor1, expectedColor1, 'Boosted value is the same as expected color');
  assert.deepEqual(boostedColor2, expectedColor2, 'Boosted value is the same as expected color');
  assert.deepEqual(boostedColor3, expectedColor3, 'Boosted value is the same as expected color');
});
