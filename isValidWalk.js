'use strict';

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  let counts = {
    w : 0,
    e : 0,
    s : 0,
    n : 0
  };

  walk.forEach( val => {
    counts[val] += 1;
  });

  if (counts.w !== counts.e) {
    return false;
  } else if (counts.n !== counts.s) {
    return false;
  } else {
    return true;
  }
}

module.exports = {isValidWalk};
