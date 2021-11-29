const round = (value, precision) => {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const ftoc = fahr => {
  let result;
  fahr = ((fahr - 32) * 5 / 9);
  result = round(fahr, 1);
  return result;
}

const ctof = cels => {
  let result;
  cels = ((cels * (9 / 5)) + 32);
  result = round(cels, 1);
  return result;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
