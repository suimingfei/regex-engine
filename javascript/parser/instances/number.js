// import digit from './digit'
const digit = require('./digit');

// 受限于js Number的上限
const number = digit.oneOrMore().tokenMap(digits => parseInt(digits.join('')));

// export default number;
module.exports = number;
