'use strict';

let sortImg = function(a,b) {
  let yearA = parseInt(a.slice(0,4));
  let yearB = parseInt(b.slice(0,4));
  let numA = parseInt(a.slice(a.length-1,a.length));
  let numB = parseInt(b.slice(b.length-1,b.length));

  if (yearA > yearB) {
    return 1;
  } else if (yearA < yearB) {
    return -1;
  } else if (yearA === yearB) {
    if (numA > numB) {
      return 1;
    } else if (numA < numB) {
      return -1;
  }

  }
};

function sortPhotos(pics){
  let newPics = pics.sort(sortImg);
  let last = newPics[newPics.length - 1];
  let lastYear = parseInt(last.slice(0,4));
  let lastNum = parseInt(last.slice(last.length-1,last.length));
  newPics.push(lastYear + ".img" + (lastNum + 1));

  newPics = newPics.slice(newPics.length-5,newPics.length);

  return newPics;

  //failing tests?
}

module.exports = {sortPhotos};
