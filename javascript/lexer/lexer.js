const {
  TOKEN_NAME
} = require('./token');
const scanner = require('./scanner');

const lexer = Object.freeze({
  get TOKEN_NAME () {
    return TOKEN_NAME;
  },
  scan (input, cursor = 0) {
    return scanner.scan(input, cursor);
  },
  tokenization (input) {
    const tokens = [];
    let cursor = 0;
    while (cursor < input.length) {
      const {
        token,
        cursor: newCursor
      } = scanner.scan(input, cursor);
      tokens.push(token);
      cursor = newCursor;
    }
    return tokens;
  }
});

module.exports = lexer;
