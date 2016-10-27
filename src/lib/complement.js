const {
  isRGBArray,
  isHexString,
  createSpinObject,
  convertHexToRgb,
  convertRgbToHsl,
  convertHslToRgb
} = require('./util');

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
  const rgb = isHexString(color) ? convertHexToRgb(color) : color;
  const hsl = convertRgbToHsl(rgb);
  // Go around the color wheel 180˚
  const complementHsl = [
    (hsl[0] + 180) > 360 ? hsl[0] - 180 : hsl[0] + 180,
    hsl[1],
    hsl[2]
  ];
  const complementRGB = convertHslToRgb(complementHsl);
  return createSpinObject(rgb, complementRGB);
}
