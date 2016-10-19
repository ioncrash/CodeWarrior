function rot90Clock(strng) {
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

function diag1Sym(strng) {
    newStrng = "";
    strngArray = strng.split("\n");
}
function selfieAndDiag1(strng) {
    newStrng = "";
    strngArray = strng.split("\n");
}
function oper(fct, s) {
    newStrng = "";
    return fct(s);
}
