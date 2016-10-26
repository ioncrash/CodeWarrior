'use strict';

let uniqueInOrder=function(iterable){
  let input;
  if (typeof iterable === "string") {
    input = iterable.split('');
  } else {
    input = iterable;
  }

  let alt = input.filter((e,i,a) => {
    return e !== a[i-1];
  });
  // let result = '';
  // alt.forEach((e,i,a) => {
  //   result = result + e;
  // });
  return alt;
};

module.exports = {
  uniqueInOrder
};
