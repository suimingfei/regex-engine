const parser = require('../parser');

class Regex {
  constructor (pattern) {
    this.ast = Regex.parse(pattern);
  }
  /**
   * @typedef {Object} AbstractSyntaxTree
   */
  /**
   * @param {String} pattern
   * @returns {AbstractSyntaxTree}
   */
  static parse (pattern) {
    return parser.parse(pattern);
  }
}

module.exports = Regex;
