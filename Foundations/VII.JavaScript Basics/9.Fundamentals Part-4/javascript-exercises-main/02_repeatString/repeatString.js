const repeatString = (str, nb) => {
  let temp = str;

  if (nb < 0) {
    return "ERROR";
  } else if (nb == 0) {
    str = "";
    return str;
  } else {
    for (let i = 1; i < nb; i++) {
      temp += str;
    }
    return temp;
  }
};

// Do not edit below this line
module.exports = repeatString;
