const util = require('../src/lib/util');
const test = require('tape');

test('convertHexToRgb', function (assert) {
  const hex = '#aabbcc';
  const rgb = util.convertHexToRgb(hex);
  const correct = [170, 187, 204];
  assert.plan(1);
  assert.deepEqual(rgb, correct, 'Parse HEX value to RGBArray');
});

test('convertRgbToHsl', function (assert) {
  const correct = [210, 25, 73];
  const rgb = [170, 187, 204];
  const hsl = util.convertRgbToHsl(rgb);
  assert.plan(1);
  assert.deepEqual(hsl, correct, 'Parse RGB value to HEXArray');
});

test('convertHslToRgb', function (assert) {
  const correct = [169, 186, 203];
  const hsl = [210, 25, 73];
  const rgb = util.convertHslToRgb(hsl);
  assert.plan(1);
  assert.deepEqual(rgb, correct, 'Parse HSL value to RGBArray');
});
