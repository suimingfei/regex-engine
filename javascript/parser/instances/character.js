const Parser = require('../classes/parser');

const char = new Parser(function (string) {
  return string.length > 0 ? {
    token: string[0],
    substring: string.substring(1)
  } : null;
});

/* \d */
const digit = char.tokenFilter(char => '0123456789'.includes(char));

module.exports = {
  char,
  digit
};