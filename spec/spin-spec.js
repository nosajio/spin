const spin = require('../src/lib/spin');
const test = require('tape');

test('spin', function (assert) {
  assert.plan(4);
  const color1 = '#00FDFF';
  const spinValue1 = [0, 127, 255];
  const spinTest1 = spin(color1, 30);
  assert.deepEqual(spinTest1, spinValue1, 'Returns expected color after spinning 30˚');
  const color2 = '#CAFFC1';
  const spinValue2 = [225, 194, 255];
  const spinTest2 = spin(color2, -200);
  assert.deepEqual(spinTest2, spinValue2, 'Will continue around the wheel, returns expected value after -200˚ spin');
  assert.throws(() => spin(color2, 361), RangeError, 'Throws RangeError when spinValue is over 360');
  assert.throws(() => spin(color2, -361), RangeError, 'Throws RangeError when spinValue is under -360');
})
