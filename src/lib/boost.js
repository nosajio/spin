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
  let boostedHsl = colorHsl;
  if (colorHsl[2] < 55) {
    const boostedLuminance = colorHsl[2] + 30;
    boostedHsl = [
      boostedHsl[0],
      boostedHsl[1],
      boostedLuminance
    ];
  }
  if (colorHsl[1] < 55) {
    const boostedSaturation = boostedHsl[1] + 30;
    boostedHsl = [
      boostedHsl[0],
      boostedSaturation,
      boostedHsl[2],
    ];
  }
  return convertHslToRgb(boostedHsl);
}
