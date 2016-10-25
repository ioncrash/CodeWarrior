'use strict';

function splitOddAndEven(n) {
  let str = n.toString();

  let result = [str[0]];
  let mod = parseInt(str[0]) % 2;

  for (let i = 1; i < str.length; i++) {
    let mod2 = parseInt(str[i]) % 2;

    if (mod === mod2) {
      result[result.length - 1] = result[result.length - 1] + str[i];
    } else {
      result.push(str[i]);
    }

    mod2 = mod;
    mod = parseInt(str[i]) % 2;
  }
  result.forEach(function(e,i) {
    result[i] = parseInt(result[i]);
  });

  return result;
}

module.exports = {
  splitOddAndEven
};
