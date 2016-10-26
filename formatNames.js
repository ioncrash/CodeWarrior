'use strict';

function list(names){
  let result = names[0].name;

  let endIndex = names.length - 1;

  for (let i = 1; i < names.length; i++) {
    if (i === endIndex) {
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
