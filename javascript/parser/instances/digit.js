// import char from './char'
const char = require('./char');

const digit = char.tokenFilter(char => '0123456789'.includes(char));

// export default digit;
module.exports = digit;
