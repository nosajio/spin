const {
  convertHexToRgb,
  convertRgbToHsl,
  convertHslToRgb,
  isRGBArray,
  isHexString,
} = require('./util');

module.exports = boost;

/**
 * Boost
 * Boost color based on luminance value
 *
 * @param {RGBArray|HexString} color
 * @return {RGBArray}
 */
function boost(color) {
  if (! isRGBArray(color) && ! isHexString(color)) {
    throw new TypeError(`boost(color) requires an RGBArray or HexString. passed ${typeof color}`);
  }
  const colorRgb = isHexString(color) ? convertHexToRgb(color) : color;
  const colorHsl = convertRgbToHsl(colorRgb);
  if (colorHsl[2] < 51) {
    const boostedLuminance = colorHsl[2] + 30;
    const boostedRgb = convertHslToRgb([
      colorHsl[0],
      colorHsl[1],
      boostedLuminance
    ]);
    return boostedRgb;
  }
  return colorRgb;
}
