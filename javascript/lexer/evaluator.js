const {
  TOKEN_NAME
} = require('./token');

const EVALUATE_RESULT_TYPE = Object.freeze({
  EMPTY: Symbol('evaluateResultType.empty'),
  INDETERMINATE: Symbol('evaluateResultType.indeterminate'),
  ERROR: Symbol('evaluateResultType.error'),
  TOKEN: Symbol('evaluateResultType.token')
});

const indeterminateLetters = Object.freeze([
  '\\', '?',
  '?<', '?<'
]);

const getToken = function (input) {
  if (keywords.includes(input))
    return {name: TOKEN_NAME.KEYWORD, value: input};
  if (operators.includes(input))
    return {name: TOKEN_NAME.OPERATOR, value: input};
  if (separators.includes(input))
    return {name: TOKEN_NAME.SEPARATOR, value: input};
  if (input.length === 1)
    return {name: TOKEN_NAME.LITERAL, value: input};
  return null;
};

const evaluator = Object.freeze({
  get EVALUATE_RESULT_TYPE () {
    return EVALUATE_RESULT_TYPE;
  },
  evaluate (input, maximalMunch = true) {
    if (input.length === 0)
      return {type: this.EVALUATE_RESULT_TYPE.EMPTY, value: null};
    if (maximalMunch && indeterminateLetters.includes(input))
      return {type: this.EVALUATE_RESULT_TYPE.INDETERMINATE, value: null};
    const token = getToken(input);
    if (token == null)
      return {type: this.EVALUATE_RESULT_TYPE.ERROR, value: null};
    return {type: this.EVALUATE_RESULT_TYPE.TOKEN, value: token};
  }
});

module.exports = evaluator;
