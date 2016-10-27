const fs          = require('fs');
const path        = require('path');
const browserify  = require('browserify');

const src  = path.join('src', 'spin.js');
const dest = path.join('bundle', 'spin.js');

browserify(src)
  .transform('babelify', { presets: ['es2015'] })
  .bundle()
  .pipe( fs.createWriteStream(dest) );
