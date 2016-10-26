'use strict';

function list(names){
  let result = '';

  let endIndex = names.length - 1;

  for (let i = 0; i < names.length; i++) {
    if (i === 0) {
      result = result + names[i].name;
    } else if (i === endIndex) {
      result = result + " & " + names[i].name;
    } else {
      result = result + ", " + names[i].name;
    }
  }
  return result;
}

module.exports = {
  list
};
