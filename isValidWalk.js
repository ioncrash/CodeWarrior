'use strict';

function isValidWalk(walk) {
  let counts = {
    w : 0,
    e : 0,
    s : 0,
    n : 0
  };

  walk.forEach( val => {
    counts[val] += 1;
  });

  return counts;
}

module.exports = {isValidWalk};
