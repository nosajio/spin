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
  const correct1 = [0, 81, 48];
  const correct2 = [0, 49, 90];
  const correct3 = [0, 0, 100];
  const rgb1 = [222, 23, 23];
  const rgb2 = [242, 217, 217];
  const rgb3 = [255, 255, 255];
  const hsl1 = util.convertRgbToHsl(rgb1);
  const hsl2 = util.convertRgbToHsl(rgb2);
  const hsl3 = util.convertRgbToHsl(rgb3);
  assert.plan(3);
  assert.deepEqual(hsl1, correct1, 'Parse RGB value to HslArray');
  assert.deepEqual(hsl2, correct2, 'Parse RGB value to HslArray');
  assert.deepEqual(hsl3, correct3, 'Parse RGB value to HslArray');
});

test('convertHslToRgb', function (assert) {
  const correct1 = [169, 186, 203];
  const correct2 = [75, 34, 129];
  const correct3 = [24, 97, 0];
  const hsl1 = [210, 25, 73];
  const hsl2 = [266, 58, 32];
  const hsl3 = [105, 100, 19];
  const rgb1 = util.convertHslToRgb(hsl1);
  const rgb2 = util.convertHslToRgb(hsl2);
  const rgb3 = util.convertHslToRgb(hsl3);
  assert.plan(3);
  assert.deepEqual(rgb1, correct1, 'Parse HSL value to RGBArray');
  assert.deepEqual(rgb2, correct2, 'Parse HSL value to RGBArray');
  assert.deepEqual(rgb3, correct3, 'Parse HSL value to RGBArray');
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
