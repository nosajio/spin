const complement = require('../src/lib/complement');
const test = require('tape');

test('complement(color) should throw when passed anything that is not hex string or rgb array', function (assert) {
  const color = 'lol';
  assert.plan(2);
  assert.throws(() => complement(color), TypeError, 'Passed `lol`, threw TypeError');
  assert.doesNotThrow(() => complement('#aabbcc'), 'Passed `#aabbcc`, didnt throw');
});

test('complement(color) should return the same type that its passed', function (assert) {
  const rgbColor = [100,220,10];
  const hexColor = '#aabbcc';
  const arr = complement(rgbColor);
  const str = complement(hexColor);
  assert.plan(2);
  assert.ok(typeof arr === 'object', 'passed & returns RGBArray');
  assert.ok(typeof str === 'string', 'passed & returns HexString');
});
