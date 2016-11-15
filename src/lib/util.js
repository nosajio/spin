
module.exports = {
  createSpinObject,
  isSpinObject,
  isRGBArray,
  isHexString,
  convertHexToRgb,
  convertRgbToHsl,
  convertHslToRgb,
};


function createSpinObject(base, colors) {
  if (isRGBArray(colors)) {
    colors = [ colors ];
  } else {
    if (! isRGBArray(colors[0])) {
      throw new TypeError('Colors must be a RGBArray, or an array of many RGBArray\'s');
    }
  }
  const spinModel = {
    base,
    colors,
  };
  return Object.freeze(
    spinModel
  );
}


/**!
 * Is Spin Object
 * Returns truthy when passed a valid SpinObject
 *
 * @param {SpinObject} it
 * @return {bool}
 */
function isSpinObject(it) {
  if (typeof it !== 'object') {
    return false;
  }
  if (! it.hasOwnProperty('base')) {
    return false;
  }
  if (! it.hasOwnProperty('colors')) {
    return false;
  }
  return true;
}


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
 * For explanations, see: http://www.easyrgb.com/index.php?X=MATH&H=18#text18
 *
 * @param {RGBArray} rgbArray
  * @return {HSLArray} HslArray
 */
function convertRgbToHsl(rgbArray) {
  if (! isRGBArray(rgbArray)) {
    throw new TypeError('Pass a valid RGBArray');
  }
  let hue = 0;
  let saturation = 0;
  let luminance = 0;
  const red = rgbArray[0] / 255;
  const green = rgbArray[1] / 255;
  const blue = rgbArray[2] / 255;
  const min = Math.min(red, green, blue);
  const max = Math.max(red, green, blue);
  const delta = max - min;
  luminance = (max + min) / 2;

  if (delta === 0) { // achromatic
    hue = 0;
    saturation = 0;
  } else {
    saturation = luminance < .5 ? delta / (max + min) : delta / (2 - max - min);
    const redDelta   = (((max - red)   / 6) + (delta / 2)) / delta;
    const greenDelta = (((max - green) / 6) + (delta / 2)) / delta;
    const blueDelta  = (((max - blue)  / 6) + (delta / 2)) / delta;
    if      (red   === max)  hue = blueDelta - greenDelta;
    else if (green === max)  hue = (1 / 3) + redDelta - blueDelta;
    else if (blue  === max)  hue = (2 / 3) + greenDelta - redDelta;
    if (hue < 0) hue += 1;
    if (hue > 1) hue -= 1;
  }

  return [
    Math.round(hue * 360),        // H
    Math.round(saturation * 100), // S
    Math.round(luminance * 100)   // L
  ];
}


/**!
 * Convert HSLArray to RGBArray
 * For explanations and inspiration:
 * http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
 *
 * @param {HSLArray} hslArray
 * @return {RGBArray} rgbArray
 */
function convertHslToRgb(hslArray) {
  if (! isHSLArray(hslArray)) {
    throw new TypeError('Pass a valid HSLArray');
  }
  let rgb = [0, 0, 0];
  if (hslArray[1] === 0) {
    // Monochrome when saturation is 0
    rgb[0] = rgb[1] = rgb[2] = hslArray[1];
  } else {
    const h = hslArray[0] / 360;
    const s = hslArray[1] / 100;
    const l = hslArray[2] / 100;
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    rgb[0] = hue2rgb(p, q, h + 1/3);
    rgb[1] = hue2rgb(p, q, h);
    rgb[2] = hue2rgb(p, q, h - 1/3);
  }
  return [
    Math.round(rgb[0] * 255), // R
    Math.round(rgb[1] * 255), // G
    Math.round(rgb[2] * 255)  // B
  ];

  function hue2rgb(p, q, t){
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  }
}
