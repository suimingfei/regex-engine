const Parser = require('../classes/parser');

const expression = Parser.zip([
  Parser.oneOf([
    character,
    group
  ]),
]);

module.exports = expression;