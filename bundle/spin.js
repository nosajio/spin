(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _require = require('./util'),
    isRGBArray = _require.isRGBArray,
    isHexString = _require.isHexString,
    createSpinObject = _require.createSpinObject,
    convertHexToRgb = _require.convertHexToRgb,
    convertRgbToHsl = _require.convertRgbToHsl,
    convertHslToRgb = _require.convertHslToRgb;

module.exports = complement;

/**!
 * Complement
 * Takes a rgb array, and returns an array with a complementary color
 *
 * @param {RGBArray || hexString} color
 * @returns {RGBArray} complement
 */
function complement(color) {
  if (!isRGBArray(color) && !isHexString(color)) {
    throw new TypeError('complement(color) requires an RGBArray or HexString. passed ' + (typeof color === 'undefined' ? 'undefined' : _typeof(color)));
  }
  var rgb = isHexString(color) ? convertHexToRgb(color) : color;
  var hsl = convertRgbToHsl(rgb);
  // Go around the color wheel 180˚
  var complementHsl = [hsl[0] + 180 > 360 ? hsl[0] - 180 : hsl[0] + 180, hsl[1], hsl[2]];
  var complementRGB = convertHslToRgb(complementHsl);
  return createSpinObject(rgb, complementRGB);
}

},{"./util":5}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _require = require('./util'),
    convertHexToRgb = _require.convertHexToRgb,
    convertRgbToHsl = _require.convertRgbToHsl,
    isRGBArray = _require.isRGBArray,
    isHexString = _require.isHexString;

module.exports = getLuminance;

/**
 * Get Luminance
 * Return the luminance percentage for the passed color
 *
 * @param {RGBArray|HexString} color
 * @return {Number}
 */
function getLuminance(color) {
  if (!isRGBArray(color) && !isHexString(color)) {
    throw new TypeError('getLuminance(color) requires an RGBArray or HexString. passed ' + (typeof color === 'undefined' ? 'undefined' : _typeof(color)));
  }
  var colorRgb = isHexString(color) ? convertHexToRgb(color) : color;
  var colorHsl = convertRgbToHsl(colorRgb);
  return colorHsl[2];
}

},{"./util":5}],3:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _require = require('./util'),
    isRGBArray = _require.isRGBArray,
    isHexString = _require.isHexString,
    createSpinObject = _require.createSpinObject,
    convertHexToRgb = _require.convertHexToRgb,
    convertRgbToHsl = _require.convertRgbToHsl,
    convertHslToRgb = _require.convertHslToRgb;

module.exports = splitComplement;

/**!
 * Split Complement
 * Takes a rgb array, and returns SpinObject with split complementary color
 *
 * @param {RGBArray || hexString} color
 * @returns {SpinObject} splitComplementColors
 */
function splitComplement(color) {
  if (!isRGBArray(color) && !isHexString(color)) {
    throw new TypeError('splitComplement(color) requires an RGBArray or HexString. passed ' + (typeof color === 'undefined' ? 'undefined' : _typeof(color)));
  }
  var rgb = isHexString(color) ? convertHexToRgb(color) : color;
  var hsl = convertRgbToHsl(rgb);
  // Go around the color wheel 150˚ & 210˚
  var complementsHsl = [];
  complementsHsl.push([hsl[0] + 150, hsl[1], hsl[2]]);
  complementsHsl.push([hsl[0] + 210, hsl[1], hsl[2]]);
  if (complementsHsl[0][0] > 360) {
    complementsHsl[0][0] = complementsHsl[0][0] - 360;
  }
  if (complementsHsl[1][0] > 360) {
    complementsHsl[1][0] = complementsHsl[1][0] - 360;
  }
  var complementsRGB = [convertHslToRgb(complementsHsl[0]), convertHslToRgb(complementsHsl[1])];
  return createSpinObject(rgb, complementsRGB);
}

},{"./util":5}],4:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _require = require('./util'),
    isRGBArray = _require.isRGBArray,
    isHexString = _require.isHexString,
    createSpinObject = _require.createSpinObject,
    convertHexToRgb = _require.convertHexToRgb,
    convertRgbToHsl = _require.convertRgbToHsl,
    convertHslToRgb = _require.convertHslToRgb;

module.exports = triadic;

/**!
 * Triadic
 *
 * @param {RGBArray || hexString} color
 * @returns {RGBArray} triadic
 */
function triadic(color) {
  if (!isRGBArray(color) && !isHexString(color)) {
    throw new TypeError('triadic(color) requires an RGBArray or HexString. passed ' + (typeof color === 'undefined' ? 'undefined' : _typeof(color)));
  }
  var rgb = isHexString(color) ? convertHexToRgb(color) : color;
  var hsl = convertRgbToHsl(rgb);
  // Go around the color wheel 120˚ & 240˚
  var triadicHSL = [];
  triadicHSL.push([hsl[0] + 120 > 360 ? hsl[0] + 120 - 360 : hsl[0] + 120, hsl[1], hsl[2]]);
  triadicHSL.push([hsl[0] + 240 > 360 ? hsl[0] + 240 - 360 : hsl[0] + 240, hsl[1], hsl[2]]);
  var triadicRGB = [convertHslToRgb(triadicHSL[0]), convertHslToRgb(triadicHSL[1])];
  return createSpinObject(rgb, triadicRGB);
}

},{"./util":5}],5:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
  createSpinObject: createSpinObject,
  isSpinObject: isSpinObject,
  isRGBArray: isRGBArray,
  isHexString: isHexString,
  convertHexToRgb: convertHexToRgb,
  convertRgbToHsl: convertRgbToHsl,
  convertHslToRgb: convertHslToRgb
};

function createSpinObject(base, colors) {
  if (isRGBArray(colors)) {
    colors = [colors];
  } else {
    if (!isRGBArray(colors[0])) {
      throw new TypeError('Colors must be a RGBArray, or an array of many RGBArray\'s');
    }
  }
  var spinModel = {
    base: base,
    colors: colors
  };
  return Object.freeze(spinModel);
}

/**!
 * Is Spin Object
 * Returns truthy when passed a valid SpinObject
 *
 * @param {SpinObject} it
 * @return {bool}
 */
function isSpinObject(it) {
  if ((typeof it === 'undefined' ? 'undefined' : _typeof(it)) !== 'object') {
    return false;
  }
  if (!it.hasOwnProperty('base')) {
    return false;
  }
  if (!it.hasOwnProperty('colors')) {
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
  if ((typeof it === 'undefined' ? 'undefined' : _typeof(it)) !== 'object') {
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
  if ((typeof it === 'undefined' ? 'undefined' : _typeof(it)) !== 'object') {
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
  var red = hexString.substr(0, 2);
  var green = hexString.substr(2, 2);
  var blue = hexString.substr(4, 2);
  var rgbArray = [parseInt(red, 16), parseInt(green, 16), parseInt(blue, 16)];
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
  if (!isRGBArray(rgbArray)) {
    throw new TypeError('Pass a valid RGBArray');
  }
  var hue = 0;
  var saturation = 0;
  var luminance = 0;
  var red = rgbArray[0] / 255;
  var green = rgbArray[1] / 255;
  var blue = rgbArray[2] / 255;
  var min = Math.min(red, green, blue);
  var max = Math.max(red, green, blue);
  luminance = Math.round((min + max) / 2 * 100);
  saturation = luminance < .5 ? Math.round((max - min) / (max + min) * 100) : Math.round((max - min) / (2 - max - min) * 100);
  if (min !== max) {
    if (red > green && red > blue) {
      hue = (green - blue) / (max - min);
    } else if (green > red && green > blue) {
      hue = 2 + (blue - red) / (max - min);
    } else if (blue > red && blue > green) {
      hue = 4 + (red - green) / (max - min);
    }
    // Convert hue to degrees by * 60
    hue = Math.round(hue * 60);
    if (hue < 0) {
      hue += 360;
    }
  }
  return [hue, saturation, luminance];
}

/**!
 * Convert HSLArray to RGBArray
 * For explanations, see: http://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
 *
 * @param {HSLArray} hslArray
 * @return {RGBArray} rgbArray
 */
function convertHslToRgb(hslArray) {
  if (!isHSLArray(hslArray)) {
    throw new TypeError('Pass a valid HSLArray');
  }
  var hue = hslArray[0];
  var saturation = hslArray[1] / 100;
  var luminance = hslArray[2] / 100;
  var rgb = [0, 0, 0];
  // Is this a grey? (no saturation)
  if (saturation === 0) {
    rgb = [luminance * 255, luminance * 255, luminance * 255];
  }
  var tmp1 = luminance > .5 ? luminance + saturation - luminance * saturation : luminance * (1 + saturation);
  var tmp2 = 2 * luminance - tmp1;
  var flatHue = hue / 360;
  var tmpRgb = [flatHue + .333, flatHue, flatHue - .333];
  tmpRgb.forEach(function (it, i) {
    if (it > 1) {
      tmpRgb[i] = it - 1;
    } else if (it < 0) {
      tmpRgb[i] = it + 1;
    }
  });
  tmpRgb.forEach(function (it, i) {
    if (6 * it < 1) {
      rgb[i] = tmp2 + (tmp1 - tmp2) * 6 * it;
    } else if (2 * it < 1) {
      rgb[i] = tmp1;
    } else if (3 * it < 2) {
      rgb[i] = tmp2 + (tmp1 - tmp2) * (.666 - it) * 6;
    } else {
      rgb[i] = tmp2;
    }
    // Convert value to 8bit
    rgb[i] = Math.round(rgb[i] * 255);
    rgb[i] = rgb[i] < 0 ? 0 : rgb[i];
  });
  return rgb;
}

},{}],6:[function(require,module,exports){
'use strict';

/**!
 * Spin
 * Nice colours with javascript
 *
 * By. Jason <jason@nosaj.io>
 */

var complement = require('./lib/complement');
var splitComplement = require('./lib/split-complement');
var triadic = require('./lib/triadic');
var getLuminance = require('./lib/luminance');

if (window) {
  window.spin = { complement: complement, splitComplement: splitComplement, triadic: triadic, getLuminance: getLuminance };
}

},{"./lib/complement":1,"./lib/luminance":2,"./lib/split-complement":3,"./lib/triadic":4}]},{},[6]);
