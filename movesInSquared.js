function rot90Clock(strng) {
  let newStrng = "";
  let strngArray = strng.split("\n");
  for (let i=0; i<strngArray.length; i++) {
    for (let j=strngArray.length-1; j>=0; j--) {
      newStrng = newStrng + strngArray[j].charAt(i);
    }
    if (i !== (strngArray.length-1)) {
      newStrng = newStrng + "\n";
    }
  }
  return newStrng;
}

function diag1Sym(strng) {
    let newStrng = "";
    let strngArray = strng.split("\n");
    for (let i=0; i<strngArray.length; i++) {
      for (let j=0; j<strngArray.length; j++) {
        newStrng = newStrng + strngArray[j].charAt(i);
      }
      if (i !== (strngArray.length-1)) {
        newStrng = newStrng + "\n";
      }
    }
    return newStrng;
}

function selfieAndDiag1(strng) {
    let strngArray = strng.split("\n");
    let diagArray = diag1Sym(strng).split("\n");
    let newStrng = "";
    for (let i=0; i<strngArray.length; i++) {
      newStrng = newStrng + strngArray[i] + "|" + diagArray[i];
      if (i !== strngArray.length -1) {
        newStrng = newStrng + "\n";
      }
    }
    return newStrng;
}

function oper(fct, s) {
    return fct(s);
}
