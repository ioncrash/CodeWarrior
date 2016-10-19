function reverseFactorial(num) {
  let last = 1;
  for (let i=1; i < num; i++) {
    if (last === num) {
      return i + "!";
    }
    last *= i;
  }
  return "None"
}
