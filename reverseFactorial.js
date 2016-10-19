function reverseFactorial(num) {
  let current = 1;
  let i = 1;
  while (current < num) {
    i++;
    current *= i;
  }
  if (current === num) {
    return i + "!";
  } else {
    return "None";
  }
}
