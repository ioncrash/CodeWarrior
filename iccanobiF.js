function iccanobif(n) {
  let thing = [1];
  let thisTerm = 1;
  let lastTerm = 0;
  for (let i = 1; i < n; i++) {
    thing.push(thisTerm + lastTerm);
    lastTerm = thisTerm;
    thisTerm = thing[thing.length - 1];
  }
  let thing2 = [];
  for (let i = 0; i < thing.length; i++) {
    thing2[i] = thing[thing.length - 1 - i];
  }
  return thing2;
}
