/**!
 * Spin
 * Nice colours with javascript
 *
 * By. Jason <jason@nosaj.io>
 */

const complement        = require('./lib/complement');
const splitComplement   = require('./lib/split-complement');
const triadic           = require('./lib/triadic');
const getLuminance      = require('./lib/luminance');
const boost             = require('./lib/boost');
const util              = require('./lib/util');

const pkg = {
  complement,
  splitComplement,
  triadic,
  getLuminance,
  boost,
  util,
};

if (typeof window !== 'undefined') {
  window.spin = pkg;
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = pkg;
}
