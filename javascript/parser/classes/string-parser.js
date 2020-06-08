// import Parser from './parser';
const Parser = require('./parser')

class StringParser extends Parser {
  constructor (targetString) {
    super(function (string) {
      return string.startsWith(targetString) ? {
        token: targetString,
        substring: string.substring(targetString.length)
      } : null;
    })
  }
}

// export default StringParser;
module.exports = StringParser;