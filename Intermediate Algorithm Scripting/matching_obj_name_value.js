//looking through an array of objects to find all objects that have matcing name and value with given object
function whatIsInAName(collection, source) {
  const keys = Object.keys(source); //to find all keys in source
  return collection.filter(
    (
      obj //filtered to match every key and value
    ) => keys.every((key) => obj[key] === source[key]) //to return objects that have given keys and values
  );
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
