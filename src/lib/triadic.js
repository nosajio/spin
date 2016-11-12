const {
  isRGBArray,
  isHexString,
  createSpinObject,
  convertHexToRgb,
  convertRgbToHsl,
  convertHslToRgb
} = require('./util');

module.exports = triadic;

/**!
 * Triadic
 *
 * @param {RGBArray || hexString} color
 * @returns {RGBArray} triadic
 */
function triadic(color) {
  if (! isRGBArray(color) && ! isHexString(color)) {
    throw new TypeError(`triadic(color) requires an RGBArray or HexString. passed ${typeof color}`);
  }
  const rgb = isHexString(color) ? convertHexToRgb(color) : color;
  const hsl = convertRgbToHsl(rgb);
  // Go around the color wheel 120˚ & 240˚
  const triadicHSL = []
  triadicHSL.push([
    (hsl[0] + 120) > 360 ? hsl[0] + 120 - 360 : hsl[0] + 120,
    hsl[1],
    hsl[2]
  ]);
  triadicHSL.push([
    (hsl[0] + 240) > 360 ? hsl[0] + 240 - 360 : hsl[0] + 240,
    hsl[1],
    hsl[2]
  ]);
  const triadicRGB = [
    convertHslToRgb(triadicHSL[0]),
    convertHslToRgb(triadicHSL[1])
  ];
  return createSpinObject(rgb, triadicRGB);
}
