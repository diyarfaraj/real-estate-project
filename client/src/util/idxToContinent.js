export const arrContinent = [
  "europe",
  "asia",
  "africa",
  "south america",
  "north america",
  "oceania",
];

export const continentToIdx = (continent) => {
  var res = arrContinent.findIndex(
    (cont) => cont.toLowerCase() === continent.toLowerCase()
  );
  return res;
};

export const idxToContinent = (idx) => {
  return arrContinent.filter((_, index) => index === Number(idx))[0];
};
