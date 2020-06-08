const evaluator = require('./evaluator');

const scanner = Object.freeze({
  scan (input, cursor = 0) {
    const startCursor = cursor;
    let backtracking = false;
    let token = null;

    while (token == null) {
      const string = input.slice(startCursor, cursor + 1);
      const maximalMunch = !backtracking;
      const {
        type: evaluateResultType,
        value
      } = evaluator.evaluate(string, maximalMunch);
      switch (evaluateResultType) {
        case evaluator.EVALUATE_RESULT_TYPE.EMPTY:
          throw new Error('tokenization error');
        case evaluator.EVALUATE_RESULT_TYPE.TOKEN:
          token = value;
          break;
        case evaluator.EVALUATE_RESULT_TYPE.INDETERMINATE:
          if (cursor === input.length)
            backtracking = true;
          else
            cursor++;
          break;
        case evaluator.EVALUATE_RESULT_TYPE.ERROR:
          backtracking = true;
          cursor--;
          break;
      }
    }

    return {
      token,
      input,
      cursor: cursor + 1
    };
  }
});

module.exports = scanner;
