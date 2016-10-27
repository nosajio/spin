
module.exports = {
  isRGBArray,
  isHexString,
  convertHexToRgb,
  convertRgbToHsl,
  convertHslToRgb,
};


/**!
 * is HEXString
 * Returns truthy if argument is a valid HEXString
 *
 * @param {HEXString} it
 * @return {bool}
 */
function isHexString(it) {
  if (typeof it !== 'string') {
    return false;
  }
  it = it.replace('#', '');
  if (it.length !== 6) {
    return false;
  }
  return true;
}


/**!
 * Is RGBArray
 * Returns truthy if argument is valid RGBArray
 *
 * @param {RGBArray} it
 * @Return {bool}
 */
function isRGBArray(it) {
  if (typeof it !== 'object') {
    return false;
  }
  if (it.length !== 3) {
    return false;
  }
  if (it[0] > 255 || it[1] > 255 || it[2] > 255) {
    return false;
  }
  if (it[0] < 0 || it[1] < 0 || it[2] < 0) {
    return false;
  }
  return true;
}


/**!
 * Is HSLArray
 * Returns truthy if argument is valid HSLArray
 *
 * @param {HSLArray} it
 * @return {bool}
 */
function isHSLArray(it) {
  if (typeof it !== 'object') {
    return false;
  }
  if (it.length !== 3) {
    return false;
  }
  if (it[0] > 360 || it[1] > 100 || it[2] > 100) {
    return false;
  }
  if (it[0] < 0 || it[1] < 0 || it[2] < 0) {
    return false;
  }
  return true;
}


/**!
 * Convert HEX to RGB
 * @param {string} hexString
 * @return {array} RGBArray
 */
function convertHexToRgb(hexString) {
  hexString = hexString.replace('#', '');
  const red = hexString.substr(0, 2);
  const green = hexString.substr(2, 2);
  const blue = hexString.substr(4, 2);
  const rgbArray = [
    parseInt(red, 16),
    parseInt(green, 16),
    parseInt(blue, 16)
  ];
  return rgbArray;
}


/**!
 * Convert RGBArray to HSLArray
 *
 */
function convertRgbToHsl(rgbArray) {
  if (! isRGBArray(rgbArray)) {
    throw new TypeError('Pass a valid RGBArray');
  }
}


/**!
 * Convert HSLArray to RGBArray
 *
 * @param {HSLArray} hslArray
 * @return {RGBArray} rgbArray
 */
function convertHslToRgb(hslArray) {
  if (! isHSLArray(hslArray)) {
    throw new TypeError('Pass a valid HSLArray');
  }
}
