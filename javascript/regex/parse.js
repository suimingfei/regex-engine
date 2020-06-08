const operators = [
  '+', '*', '?', '.',
  '(', ')',
  '|',
]
const keywords = [
  '\\d',
  '\\w',
]
const depends = [
  '{', '}',
  '-'
];

const lex = function (string) {
  const tokens = [];
  const chars = [...string].reverse();
  while (chars.length > 0) {
    const char = chars.pop();
    if ()
  }
  const tokens = [];
  
}

const parse = function (pattern) {
  const chars = [...pattern];

}