const prod = process.env.NODE_ENV === 'production';

if (prod) {
  module.exports = require('./keys.prod');
} else {
  module.exports = require('./keys.dev');
}
