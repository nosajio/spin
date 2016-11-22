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

#### `spin.complement(<RGBArray> || <HEXString>)`
returns `SpinObject`

Returns a `SpinObject` with the `.color` prop containing complementary `RGBArray` color.

#### `spin.splitComplement(<RGBArray> || <HEXString>)`
returns `SpinObject`

Returns a `SpinObject` with the `.color` prop containing split-complementary `RGBArray` colors.

#### `spin.tetriadic(<RGBArray> || <HEXString>)`
returns `SpinObject`

Returns a `SpinObject` with the `.color` prop containing split-complementary `RGBArray` colors.

### Helper methods

#### `spin.getLuminance(<RGBArray> || <HEXString>)`
returns `number`

Returns a `Number` between 0 and 100 representing the luminance percentage of the passed color.

#### `spin.boost(<RGBArray> || <HEXString>)`
returns `RGBArray`

#### `spin.spin(<RGBArray> || <HEXString>, spinValue <Number>)`
returns `RGBArray`

Change the the color's Hue value. `spinValue` should be between -360 and 360.

#### `spin.balance(firstColor: <RGBArray || HEXString>, secondColor: <RGBArray || HEXString>)`
returns `SpinObject`

Adjusts the two passed colors to ensure that they contrast well together. If the colors already have a good amount of contrast, they won't be changed.
