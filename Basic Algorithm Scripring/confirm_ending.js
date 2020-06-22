//check if a string ends with the given target string...

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

//.endsWith() method...

function confirmEnding(str, target) {
  return str.endsWith(target);
}
