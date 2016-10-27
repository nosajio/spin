const { isRGBArray, isSpinObject } = require('../src/lib/util');
const complement = require('../src/lib/complement');
const test = require('tape');

test('complement(color) should throw when passed anything that is not hex string or rgb array', function (assert) {
  const color = 'lol';
  assert.plan(2);
  assert.throws(() => complement(color), TypeError, 'Passed `lol`, threw TypeError');
  assert.doesNotThrow(() => complement('#aabbcc'), 'Passed `#aabbcc`, didnt throw');
});

test('complement(color) should always return SpinObject', function (assert) {
  const hexColor = '#aabbcc';
  const compColor = complement(hexColor);
  assert.plan(1);
  assert.ok(isSpinObject(compColor), 'passed HEX, returns SpinObject');
});
