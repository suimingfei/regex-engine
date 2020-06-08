const anchor = /^\^\$$/;
// ^ $
const operator = /^([|-\\*+?]|[*+]\?|{\d+(,\d*)?}|{\d+,}\?)$/;
// | \ * + ? *? +? {n} {n,} {n,m} {n,}?
const keyword = /^(.|\\[ABbcDdEfLlnrSstUuvWwx0-9])$/;
// . \A \B \c \D \d \E \f \L \l \n \r \S \s \U \u \v \W \w \x \0...
const separators = /^(\((\?<?[=!])?|[[\]]|\[\^)$/;
// ( (?= (?<= (?! (?<! ) [ ] [^
const literals = /^[^^$|\\*+?.(){}[\]]$/;