const {
  convertHexToRgb,
  convertRgbToHsl,
  isRGBArray,
  isHexString,
} = require('./util');

module.exports = getLuminance;

/**
 * Get Luminance
 * Return the luminance percentage for the passed color
 *
 * @param {RGBArray|HexString} color
 * @return {Number}
 */
function getLuminance(color) {
  if (! isRGBArray(color) && ! isHexString(color)) {
    throw new TypeError(`getLuminance(color) requires an RGBArray or HexString. passed ${typeof color}`);
  }
  const colorRgb = isHexString(color) ? convertHexToRgb(color) : color;
  const colorHsl = convertRgbToHsl(colorRgb);
  return colorHsl[2];
}
