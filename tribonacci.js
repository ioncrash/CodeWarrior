function tribonacci(signature,n){
  let seq = [];
  if (n === 0) {
    return seq;
  }
  let twoAgo = signature[0];
  let last = signature[1];
  let thisOne = signature[2];
  seq = signature;

  for (let i = 2; i < n-1; i++) {
    next = twoAgo + last + thisOne;
    seq.push(next);
    thisOne = next;
    last = thisOne;
    twoAgo = last;
  }
  return seq;
}
