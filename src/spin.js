/**!
 * Spin
 * Nice colours with javascript
 *
 * By. Jason <jason@nosaj.io>
 */

const complement = require('./lib/complement');
const splitComplement = require('./lib/split-complement');

if (window) {
  window.spin = { complement, splitComplement };
}
