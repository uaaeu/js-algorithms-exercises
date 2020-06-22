//string repeat with for loop

function repeatStringNumTimes(str, num) {
  let repeated = "";
  for (let i = num; i > 0; i--) {
    repeated += str;
  }
  return repeated;
}

//with while loop

function repeatStringNumTimes(str, num) {
  let repeated = "";
  while (num > 0) {
    repeated += str;
    num--;
  }
  return repeated;
}
