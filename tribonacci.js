function tribonacci(signature,n){
  let seq = [];
  if (n === 0) {
    return seq;
  } else if (n <= 2) {
    for (let i = 0; i < n; i++) {
      seq.push(signature[i]);
    }
    return seq;
  }
  let twoAgo = signature[0];
  let last = signature[1];
  let thisOne = signature[2];
  seq = signature;

  for (let i = 2; i < n-1; i++) {
    let next = twoAgo + last + thisOne;
    seq.push(next);
    twoAgo = last;
    last = thisOne;
    thisOne = next;


    console.log(thisOne, last, twoAgo);
  }
  return seq;
}
