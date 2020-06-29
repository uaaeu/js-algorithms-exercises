//Map the Debris
function orbitalPeriod(arr) {
  const gM = 398600.4418;
  const earthRadius = 6367.4447;
  const orbitalPeriodCalc = (x) =>
    Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + x.avgAlt, 3) / gM)
    );
  return arr.map((x) => ({
    name: x.name,
    orbitalPeriod: orbitalPeriodCalc(x),
  }));
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]); //return [{name: "sputnik", orbitalPeriod: 86400}]
