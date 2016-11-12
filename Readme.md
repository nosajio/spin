![Spin Logo](http://i.imgur.com/iETvK9F.png 400x)

> Nice colors

Spin is a library for accessing the color wheel with JS.

## How to use it
First off, look at the example to see how it works. If you just want to use spin in the browser, you can use the `bundle/spin.js` file. If you want to use it as a part of your own project, I recommend checking out the repo and `require`-ing the modules you need.

## Advanced usage & development
  1. Clone this repo
  2. Run `npm install && npm start` to install dependencies and build the bundle file
  3. Run `npm test`
  4. Good to go!

## API

### Color Harmonies

#### `spin.complement(<RGBArray> || <HEXString>)`
Returns a `SpinObject` with the `.color` prop containing complementary `RGBArray` color.

#### `spin.splitComplement(<RGBArray> || <HEXString>)`
Returns a `SpinObject` with the `.color` prop containing split-complementary `RGBArray` colors.

#### `spin.tetriadic(<RGBArray> || <HEXString>)`
Returns a `SpinObject` with the `.color` prop containing split-complementary `RGBArray` colors.

### Helper methods

#### `spin.getLuminance(<RGBArray> || <HEXString>)`
Returns a `Number` between 0 and 100 representing the luminance percentage of the passed color.
