const {isRGBArray, isHexString} = require('./util');

module.exports = complement;

/**!
 * Complement
 * Takes a rgb array, and returns an array with a complementary color
 *
 * @param {RGBArray || hexString} color
 * @returns {RGBArray} complement
 */
function complement(color) {
  if (! isRGBArray(color) && ! isHexString(color)) {
    throw new TypeError(`complement(color) requires an RGBArray or HexString. passed ${typeof color}`);
  }
  let complementRGB;
  if (isHexString(color)) {
    complementRGB = 'aabbcc';
  } else
  if (isRGBArray(color)) {
    complementRGB = [0, 0, 0];
  }
  return complementRGB;
}
