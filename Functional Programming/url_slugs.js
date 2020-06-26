//Apply Functional Programming to Convert Strings to URL Slugs
var globalTitle = "Winter Is Coming";

// lowercase, split, filter, join method to get url slugs
function urlSlug(title) {
  return title
    .toLowerCase() // to lowercase all string
    .split(" ") // to split into array with string or we can use regex /\W/ to split non-word char.
    .filter((x) => x) // filters if there is undefined elements like "" because of too much space
    .join("-"); // to join array into string for url slug
}
urlSlug(globalTitle); //returns "winter-is-coming"
