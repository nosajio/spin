const {
  convertHexToRgb,
  convertRgbToHsl,
  isRGBArray,
  isHexString,
  convertHslToRgb
} = require('./util');

module.exports = spin;

/**
 * Spin
 * Alows for simple HUE changing
 *
 * @param {RGBArray|HexString} color
 * @param {number} spinValue
 * @return {RGBArray}
 */
function spin(color, spinValue) {
  if (! isRGBArray(color) && ! isHexString(color)) {
    throw new TypeError(`spin(color) requires an RGBArray or HexString. passed ${typeof color}`);
  }
  if (spinValue > 360 || spinValue < -360) {
    throw new RangeError('spinValue should be between 0 and 360');
  }
  const colorRgb = isHexString(color) ? convertHexToRgb(color) : color;
  const colorHsl = convertRgbToHsl(colorRgb);
  let newHue;
  if (spinValue + colorHsl[0] > 360) {
    newHue = spinValue + colorHsl[0] - 360;
  } else if (spinValue + colorHsl[0] < 0) {
    newHue = 360 + spinValue + colorHsl[0];
  } else {
    newHue = spinValue + colorHsl[0];
  }
  const newColor = [newHue, colorHsl[1], colorHsl[2]];
  const newRgb = convertHslToRgb(newColor);
  return newRgb;
}
