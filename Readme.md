![Spin Logo](http://i.imgur.com/iETvK9F.png 400x)

> Nice colors

Spin is a library for accessing the color wheel with JS.

## How to use it
If you just want to use spin in the browser, you can require the bundled `spin-color/bundle/spin.js` file. If you want to use methods from the library in your own project, just require it as normal.

## For development:
  1. Clone this repo
  2. Run `npm install && npm start` to install dependencies and build the bundle file
  3. Run `npm test` to make sure all is good
  4. Good to go!

## API

### Color Harmonies

#### `spin.complement(base: RGBArray || HEXString)`
returns `SpinObject`

Returns a `SpinObject` with the `.color` prop containing complementary `RGBArray` color.

#### `spin.splitComplement(base: RGBArray || HEXString)`
returns `SpinObject`

Returns a `SpinObject` with the `.color` prop containing split-complementary `RGBArray` colors.

#### `spin.tetriadic(base: RGBArray || HEXString)`
returns `SpinObject`

Returns a `SpinObject` with the `.color` prop containing split-complementary `RGBArray` colors.

### Helper methods

#### `spin.getLuminance(base: RGBArray || HEXString)`
returns `number`

Returns a `Number` between 0 and 100 representing the luminance percentage of the passed color.

#### `spin.boost(base: RGBArray || HEXString)`
returns `RGBArray`

#### `spin.spin(base: RGBArray || HEXString, spinValue: number)`
returns `RGBArray`

Change the the color's Hue value. `spinValue` should be between -360 and 360.

### Utility methods

#### `spin.util.isSpinObject(test)`
returns: `boolean`

#### `spin.util.isRGBArray(test)`
returns: `boolean`

#### `spin.util.isHexString(test)`
returns: `boolean`

#### `spin.util.convertHexToRgb(base: HEXString)`
returns: `RGBArray`

#### `spin.util.convertRgbToHsl(base: RGBArray)`
returns: `HSLArray`

#### `spin.util.convertHslToRgb(base: HSLArray)`
returns: `RGBArray`

#### `spin.util.createSpinObject(base: HexString || RGBArray || HSLArray, colors: array)`
returns `SpinObject`

Outputs a `SpinObject`
