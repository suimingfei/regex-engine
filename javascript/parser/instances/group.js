const Parser = require('../classes/parser');
const StringParser = require('../classes/string-parser');
const expression = require('./expression');

const group = Parser.zip([
  new StringParser('('),
  Parser.optional(new StringParser('?:')),
  expression,
  new StringParser(')')
]).tokenMap(([
  _1,
  groupNonCapturingModifier,
  exp,
  _2
]) => ({
  groupNonCapturingModifier: groupNonCapturingModifier,
  expression: exp
}));

module.exports = group;