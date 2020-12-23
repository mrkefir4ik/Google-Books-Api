const path = require('path');

module.exports = {
  entry : './source/app.js',
  output : {
    filename : 'bundle.js',
    path : path.resolve(__dirname, 'dist')
  }
}