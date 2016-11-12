/**!
 * Spin
 * Nice colours with javascript
 *
 * By. Jason <jason@nosaj.io>
 */

const complement = require('./lib/complement');
const splitComplement = require('./lib/split-complement');
const triadic = require('./lib/triadic');
const getLuminance = require('./lib/luminance');

if (window) {
  window.spin = { complement, splitComplement, triadic, getLuminance };
}
