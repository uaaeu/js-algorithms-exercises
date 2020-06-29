//Check object keys in an array if they exist and has a true value
function truthCheck(collection, pre) {
  return collection.map((x) => pre in x && x[pre]).every((x) => x);
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: 0 },
    { user: "Po", sex: "female" },
  ],
  "sex"
); // return false bc of 3rd object's sex value is not true
