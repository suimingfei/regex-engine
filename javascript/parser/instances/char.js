// import Parser from '../classes/parser';
const Parser = require('../classes/parser');

const char = new Parser(function (string) {
  return string.length > 0 ? {
    token: string[0],
    substring: string.substring(1)
  } : null;
});

// export default char;
module.exports = char;
