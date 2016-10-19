function alternateCase(s) {
  let altString = '';
  let charArray = s.split('');
  for (let i=0; i< charArray.length; i++) {
    if (charArray[i] === charArray[i].toUpperCase()) {
      altString = altString + charArray[i].toLowerCase();
    } else if (charArray[i] === charArray[i].toLowerCase()) {
      altString = altString + charArray[i].toUpperCase();
    }
  }
  return altString;
}
