const commonLexemes = [
  /^\^\$$/, 'anchor',
  // ^ $
  /^(.|\\[ABbcDdEfLlnrSstUuvWwx0-9])$/, 'keyword',
  // . \A \B \c \D \d \E \f \L \l \n \r \S \s \U \u \v \W \w \x \0...
  /^([|-\\*+?]|[*+]\?|{\d+(,\d*)?}|{\d+,}\?)$/, 'operator',
  // | \ * + ? *? +? {n} {n,} {n,m} {n,}?
  /^(\((\?<?[=!])?|[[\]]|\[\^)$/, 'separators',
  // ( (?= (?<= (?! (?<! ) [ ] [^
  /^[^^$|\\*+?.(){}[\]]$/, 'literal'
];

const characterClassLexemes = [
  /^(\\[ABbcDdEfLlnrSstUuvWwx])$/, 'keyword', 
  // \A \B \c \D \d \E \f \L \l \n \r \S \s \U \u \v \W \w \x
  /^([\-\\\]])$/, 'operator',
  // - \ ]
  /^[^\-\\\]]$/, 'literal'
];

module.exports = {
  commonLexemes,
  characterClassLexemes
};
