const Parser = require('../classes/parser');
const StringParser = require('../classes/string-parser');
const expression = require('./expression');

const regex = Parser.zip([
  Parser.optional(new StringParser('^')),
  expression,
  Parser.optional(new StringParser('$'))
]);

module.exports = regex;
