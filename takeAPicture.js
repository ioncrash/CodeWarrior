let parseName = function(imgName) {
  let noPeriod = imgName.split('.');
  noPeriod[0] = parseInt(noPeriod[0]);
  noPeriod[1] = parseInt(noPeriod[1].charAt(noPeriod[1].length - 1));
  return noPeriod;
}

function sortPhotos(pics){
  let newPics = [pics[0]];

}


  for (let i = 1; i < pics.length; i++) {
    for (j = newPics.length - 1; j >= 0; j--) {
      //add an if here to use the splice function, then a shift if length >5
    }
  }
};
