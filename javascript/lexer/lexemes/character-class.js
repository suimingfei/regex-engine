
const lexemes = [
  /^(\\[ABbcDdEfLlnrSstUuvWwx])$/, 'keyword', 
  // \A \B \c \D \d \E \f \L \l \n \r \S \s \U \u \v \W \w \x
  /^([\-\\\]])$/, 'operator',
  // - \ ]
  /^[^\-\\\]]$/, 'literal'
];
