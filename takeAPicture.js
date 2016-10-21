"use strict";

let parseName = function(imgName) {
  let noPeriod = imgName.split('.');
  noPeriod[0] = parseInt(noPeriod[0]);
  noPeriod[1] = parseInt(noPeriod[1].charAt(noPeriod[1].length - 1));
  return noPeriod;
};

function sortPhotos(pics){
  let newPics = [pics[0]];

  //iterate through total pics
  for (let i = 1; i < pics.length; i++) {
    let thisOne = pics[i];
    let thisSig = parseName(thisOne);

    //iterate through new memory bloc
    for (let j=(newPics.length - 1); j>=0; j--) {
      let comparePic = newPics[j];
      let compSig = parseName(comparePic);
      // console.log(`this is thissig ${thisSig}`);
      // console.log(`this is compsig ${compSig}`);

      console.log(thisSig[0]);
      console.log(compSig[0]);

      //compare signatures

      if (thisSig[0] > compSig[0] && thisSig[1] > compSig[1]) {
        console.log('here')
        newPics.splice(j+1, 0, thisOne);
        break;
      }
    }
    newPics.splice(0,0,thisOne);
  }
  //add thing to prevent size from exceeding 5

  return newPics;
}
