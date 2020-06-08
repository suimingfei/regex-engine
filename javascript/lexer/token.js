const IDENTIFIER = Symbol('tokenName.identifier');
const KEYWORD = Symbol('tokenName.keyword');
const OPERATOR = Symbol('tokenName.operator');
const SEPARATOR = Symbol('tokenName.separator');
const LITERAL = Symbol('tokenName.literal');
const COMMENT = Symbol('tokenName.comment');
const INDETERMINATE = Symbol('tokenName.indeterminate');

const TOKEN_NAME = Object.freeze({
  IDENTIFIER,
  KEYWORD,
  OPERATOR,
  SEPARATOR,
  LITERAL,
  COMMENT,
  INDETERMINATE
});

module.exports = {
  TOKEN_NAME
};