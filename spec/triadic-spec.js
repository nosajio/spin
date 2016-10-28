const test = require('tape');
const { isRGBArray, isSpinObject } = require('../src/lib/util');
const triadic = require('../src/lib/triadic');

test('triadic(color) should throw when passed anything that is not hex string or rgb array', function (assert) {
  const color = 'lol';
  assert.plan(2);
  assert.throws(() => triadic(color), TypeError, 'Passed `lol`, threw TypeError');
  assert.doesNotThrow(() => triadic('#aabbcc'), 'Passed `#aabbcc`, didnt throw');
});

test('triadic(color) should always return SpinObject', function (assert) {
  const hexColor = '#aabbcc';
  const compColor = triadic(hexColor);
  assert.plan(1);
  assert.ok(isSpinObject(compColor), 'passed HEX, returns SpinObject');
});

test('triadic(color) should return two colors', function (assert) {
  const hexColor = '#aabbcc';
  const compColor = triadic(hexColor);
  assert.plan(1);
  assert.equal(compColor.colors.length, 2, 'complementColors.colors array has two items');
});
