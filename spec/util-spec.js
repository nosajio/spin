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

test('isSpinObject', function (assert) {
  const spinProto = {
    colors: [ [0,0,0], [255,255,255] ],
    base: [100, 230, 11],
  };
  const spinNot = {
    base: 100,
  };
  assert.plan(2);
  assert.ok(util.isSpinObject(spinProto), 'True when passed valid object');
  assert.notOk(util.isSpinObject(spinNot), 'False when passed invalid object');
});

test('createSpinObject', function (assert) {
  const base = [1,1,1];
  const colors = [
    [3,3,3],
    [2,2,2]
  ];
  assert.plan(3);
  const spinObject = util.createSpinObject(base, colors);
  assert.ok(util.isSpinObject(spinObject), 'Should create a valid spin object');
  const proto = { base, colors }
  assert.deepEqual(spinObject, proto, 'Should look the same as pre-made object');
  const protoNested = { base, colors: [[5,6,7]] };
  const nestedSpinObject = util.createSpinObject(base, [5,6,7]);
  assert.deepEqual(
      nestedSpinObject,
      protoNested,
      'Should nest array when colors is a single RGBArray'
    );
});
