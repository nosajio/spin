const { isRGBArray, isSpinObject } = require('../src/lib/util');
const splitComplement = require('../src/lib/split-complement');
const test = require('tape');

test('splitComplement(color) should throw when passed anything that is not hex string or rgb array', function (assert) {
  const color = 'lol';
  assert.plan(2);
  assert.throws(() => splitComplement(color), TypeError, 'Passed `lol`, threw TypeError');
  assert.doesNotThrow(() => splitComplement('#aabbcc'), 'Passed `#aabbcc`, didnt throw');
});

test('splitComplement(color) should always return SpinObject', function (assert) {
  const hexColor = '#aabbcc';
  const compColor = splitComplement(hexColor);
  assert.plan(1);
  assert.ok(isSpinObject(compColor), 'passed HEX, returns SpinObject');
});

test('splitComplement(color) should return two colors', function (assert) {
  const hexColor = '#aabbcc';
  const compColor = splitComplement(hexColor);
  assert.plan(1);
  assert.equal(compColor.colors.length, 2, 'complementColors.colors array has two items');
});
