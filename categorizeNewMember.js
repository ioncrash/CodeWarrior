function openOrSenior(data){
  let memberList = [];
  for (let i = 0; i < data.length; i++) {
    let member = data[i];
    let status = "";
    if (data[i][0] > 55 && data[i][1] > 7) {
      member = "Senior";
    } else {
      member = "Open";
    }
    memberList.push(member);
  }
  return memberList;
}
