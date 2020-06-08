class Parser {
  /**
   * @callback ParseMethod
   * @param {String} string
   * @returns {{token: Any, substring: String}|null}
   */
  /**
   * @param {ParseMethod} parseMethod 
   */
  constructor (parseMethod) {
    this.parse = parseMethod;
  }

  /**
   * @callback TokenPredicateMethod
   * @param {*} token
   * @returns {Boolean} 
   */
  /**
   * @param {TokenPredicateMethod} tokenPredicateMethod
   * @returns {Parser}
   */
  tokenFilter (tokenPredicateMethod) {
    return new Parser(string => {
      try {
        let {token, substring} = this.parse(string);
        return tokenPredicateMethod(token) ? {token, substring} : null;
      } catch (err) {
        return null;
      }
    });
  }
  /**
   * @callback TokenFunctorMethod
   * @param {*} token
   * @returns {*}
   */
  /**
   * @param {TokenFunctorMethod} tokenFunctorMethod
   * @returns {Parser}
   */
  tokenMap (tokenFunctorMethod) {
    return new Parser(string => {
      try {
        let {token, substring} = this.parse(string);
        return {token: tokenFunctorMethod(token), substring};
      } catch (err) {
        return null;
      }
    });
  }
  /**
   * @callback FunctorMethod
   * @param {Function} parseMethod
   * @returns {Function}
   */
  /**
   * @param {FunctorMethod} functorMethod
   * @returns {Parser}
   */
  map (functorMethod) {
    return new Parser(functorMethod(this.parse));
  }
  /**
   * @callback MonadMethod
   * @param {Function} parseMethod
   * @returns {Parser} 
   */
  /**
   * @param {MonadMethod} monadMethod
   * @returns {Parser}
   */
  flatMap (monadMethod) {
    return monadMethod(this.parse);
  }
  /**
   * @returns {Parser}
   */
  oneOrMore () {
    return new Parser(string => {
      const matches = [];
      let result = this.parse(string);
      while (result !== null) {
        const {token, substring} = result;
        matches.push(token);
        string = substring;
        result = this.parse(string);
      }
      return matches.length > 0 ? {token: matches, substring: string} : null;
    });
    // return this.zeroOrMore().tokenFilter(token => token.length > 0);
  }
  /**
   * @returns {Parser}
   */
  zeroOrMore () {
    return new Parser(string => {
      const matches = [];
      let result = this.parse(string);
      while (result !== null) {
        const {token, substring} = result;
        matches.push(token);
        string = substring;
        result = this.parse(string);
      }
      return {token: matches, substring: string}
    });
  }
  /**
   * @param  {Array.<Parser>} parsers
   * @returns {Parser}
   */
  static zip (parsers) {
    parsers = [...parsers];
    return new Parser(function (string) {
      try {
        const tokens = [];
        for (let i = 0; i < parsers.length; i++) {
          const {token, substring} = parsers[i].parse(string);
          tokens.push(token);
          string = substring;
        }
        return {token: tokens, substring: string}
      } catch (err) {
        return null;
      }
    });
  }
  /**
   * @param {Parser} parser
   * @returns {Parser}
   */
  static optional (parser) {
    return new Parser(function (string) {
      const result = parser.parse(string);
      return result === null ? {token: null, substring: string} : result;
    });
  }
  static oneOf (parsers) {
    return new Parser(function (string) {
      for (let i = 0; i < parsers.length; i++) {
        const result = parsers[i].parse(string);
        if (result != null) return result;
      }
      return null;
    });
  }
}

// export default Parser;
module.exports = Parser;
