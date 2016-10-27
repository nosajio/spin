> Nice colors

Spin is a library used for navigating the color wheel with JS.

# How to use it
If you just want to use spin in the browser, you can use the `bundle/spin.js` file

# Advanced usage & development
  1. Clone this repo
  2. Run `npm install && npm start` to install dependencies and build the bundle file
  3. Run `npm test`
  4. Good to go!

# API

## `spin.complement(<RGBArray> || <HEXString>)`
Returns a `<SpinObject>` with the `.color` prop containing complementary `RGBArray` color.

## `spin.splitComplement(<RGBArray> || <HEXString>)`
Returns a `<SpinObject>` with the `.color` prop containing split-complementary `RGBArray` colors.
