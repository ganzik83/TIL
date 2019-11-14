const _ = require('underscore');
const numbers = _.range(1, 46);

// 숫자 6개 뽑아서 꺼낸다!
module.exports = _.sample(numbers, 6).sort((a, b) => a - b);
