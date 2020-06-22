//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  let truncated = str.slice(0, num);
  if (str.length <= num) {
    return truncated;
  }
  truncated += "...";
  return truncated;
}

//shorter version

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}
