const lexer = require('../lexer');

const CAT = Symbol('operator.cat');

const AST_NODE_TYPE = Object.freeze({
  QUANTIFIER: Symbol('abstractSyntaxTreeNodeType.quantifier')
});

const handleQuantifier = function () {

};

const parser = {
  parse (input) {
    const tokens = lexer.tokenization(input);
    tokens.reverse();

    const operatorStack = [];
    const ASTStack = [];
    while (tokens.length > 0) {
      const token = tokens.pop();
      if (token.name = lexer.TOKEN_NAME.LITERAL) {
        ASTStack.push(token);
      }
      else {
        operatorStack.push(token);
      }
      if (ASTStack.length > operatorStack.length + 1) {
        operatorStack.push(CAT);
      }
    }
  }
}
