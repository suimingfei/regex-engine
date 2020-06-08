// const rangeQuantifier = require('./parser/instances/rangeQuantifier');
// const number = require('./parser/instances/number');
// const char = require('./parser/instances/char');
// const digit = require('./parser/instances/digit');
// const StringParser = require('./parser/classes/string-parser');

// const str = '{1,3}';
// console.log([
//   char.parse('asd1'),
//   digit.parse('2as'),
//   number.parse('as32134'),
//   rangeQuantifier.parse(str),
// ]);

const lexer = require('./lexer');

console.log(lexer.tokenization('asdfa\\s[]?<=*.\+'))
