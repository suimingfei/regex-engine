const Parser = require('../classes/parser');
const StringParser = require('../classes/string-parser');
const number = require('./number');

const oneOrMore = new StringParser('+').tokenMap(() => ({
  lowerBound: 1,
  upperBound: null
}));

const zeroOrMore = new StringParser('*').tokenMap(() => ({
  lowerBound: 0,
  upperBound: null
}));

const range = Parser.zip([
  new StringParser('{'),
  number,
  new StringParser(','),
  Parser.optional(number),
  new StringParser('}'),
]).tokenMap(([
  _1,
  lowerBound,
  _2,
  upperBound
]) => ({
  lowerBound,
  upperBound
}));

const quantifier = Parser.oneOf([
  oneOrMore,
  zeroOrMore,
  range
]);

module.exports = quantifier;
