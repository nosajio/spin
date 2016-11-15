
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
 * For explanations, see: http://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
 *
 * @param {RGBArray} rgbArray
  * @return {HSLArray} HslArray
 */
function convertRgbToHsl(rgbArray) {
  if (! isRGBArray(rgbArray)) {
    throw new TypeError('Pass a valid RGBArray');
  }
  var hue = 0;
  var saturation = 0;
  var luminance = 0;
  const red = rgbArray[0] / 255;
  const green = rgbArray[1] / 255;
  const blue = rgbArray[2] / 255;
  const min = Math.min(red, green, blue);
  const max = Math.max(red, green, blue);
  luminance = Math.round(((min + max) / 2) * 100);
  saturation = (luminance < .5) ?
    Math.round( ((max - min) / (max + min)) * 100 ) :
    Math.round( ((max - min) / (2 - max - min)) * 100 );
  if (min !== max) {
    if (red > green && red > blue) {
      hue = (green - blue) / (max - min);
    } else
    if (green > red && green > blue) {
      hue = 2 + (blue - red) / (max - min);
    } else
    if (blue > red && blue > green) {
      hue = 4 + (red - green) / (max - min);
    }
    // Convert hue to degrees by * 60
    hue = Math.round(hue * 60);
    if (hue < 0) {
      hue += 360;
    }
  }
  return [ hue, saturation, luminance ]
}


/**!
 * Convert HSLArray to RGBArray
 * For explanations, see: http://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
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
    Math.round(rgb[0] * 255),
    Math.round(rgb[1] * 255),
    Math.round(rgb[2] * 255)
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
