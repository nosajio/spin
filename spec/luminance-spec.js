const getLuminance = require('../src/lib/luminance');
const test = require('tape');

test('getLuminance', function (assert) {
  assert.plan(1);
  const luminanceValue = 30;
  const color = '#009912';
  const luminanceTest = getLuminance(color);
  assert.equal(luminanceTest, luminanceValue, 'Returns expected luminance value for passed color');
})
