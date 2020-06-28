//DNA Pairing
const dnaPair = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

function pairElement(str) {
  return str.split("").map((x) => [x, dnaPair[x]]);
}

pairElement("GCG"); //return [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
