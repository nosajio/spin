const {
  isRGBArray,
  isHexString,
  createSpinObject,
  convertHexToRgb,
  convertRgbToHsl,
  convertHslToRgb
} = require('./util');

module.exports = splitComplement;

/**!
 * Split Complement
 * Takes a rgb array, and returns SpinObject with split complementary color
 *
 * @param {RGBArray || hexString} color
 * @returns {SpinObject} splitComplementColors
 */
function splitComplement(color) {
  if (! isRGBArray(color) && ! isHexString(color)) {
    throw new TypeError(`splitComplement(color) requires an RGBArray or HexString. passed ${typeof color}`);
  }
  const rgb = isHexString(color) ? convertHexToRgb(color) : color;
  const hsl = convertRgbToHsl(rgb);
  // Go around the color wheel 150˚ & 210˚
  const complementsHsl = [];
  complementsHsl.push([
    hsl[0] + 150,
    hsl[1],
    hsl[2]
  ]);
  complementsHsl.push([
    hsl[0] + 210,
    hsl[1],
    hsl[2]
  ]);
  if (complementsHsl[0][0] > 360) {
    complementsHsl[0][0] = complementsHsl[0][0] - 360;
  }
  if (complementsHsl[1][0] > 360) {
    complementsHsl[1][0] = complementsHsl[1][0] - 360;
  }
  const complementsRGB = [
    convertHslToRgb(complementsHsl[0]),
    convertHslToRgb(complementsHsl[1])
  ];
  return createSpinObject(rgb, complementsRGB);
}
