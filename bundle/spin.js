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
 * For explanations, see: http://www.easyrgb.com/index.php?X=MATH&H=18#text18
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
  var delta = max - min;
  luminance = (max + min) / 2;

  if (delta === 0) {
    // achromatic
    hue = 0;
    saturation = 0;
  } else {
    saturation = luminance < .5 ? delta / (max + min) : delta / (2 - max - min);
    var redDelta = ((max - red) / 6 + delta / 2) / delta;
    var greenDelta = ((max - green) / 6 + delta / 2) / delta;
    var blueDelta = ((max - blue) / 6 + delta / 2) / delta;
    if (red === max) hue = blueDelta - greenDelta;else if (green === max) hue = 1 / 3 + redDelta - blueDelta;else if (blue === max) hue = 2 / 3 + greenDelta - redDelta;
    if (hue < 0) hue += 1;
    if (hue > 1) hue -= 1;
  }

  return [Math.round(hue * 360), // H
  Math.round(saturation * 100), // S
  Math.round(luminance * 100) // L
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
  if (!isHSLArray(hslArray)) {
    throw new TypeError('Pass a valid HSLArray');
  }
  var rgb = [0, 0, 0];
  if (hslArray[1] === 0) {
    // Monochrome when saturation is 0
    rgb[0] = rgb[1] = rgb[2] = hslArray[1];
  } else {
    var h = hslArray[0] / 360;
    var s = hslArray[1] / 100;
    var l = hslArray[2] / 100;
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    rgb[0] = hue2rgb(p, q, h + 1 / 3);
    rgb[1] = hue2rgb(p, q, h);
    rgb[2] = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(rgb[0] * 255), // R
  Math.round(rgb[1] * 255), // G
  Math.round(rgb[2] * 255) // B
  ];

  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }
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
