const add7 = (nbr) => {
  return nbr + 7;
};
console.log(add7(1));

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(2, 5));

const capitalize = (str) => {
  str = str.toLowerCase();

  // if 1st char is lowercase, make it uppercase
  str = str[0].toUpperCase() + str.substring(1);

  // Capitalize first letter of each word
  // split the sentence
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  str = words.join(" ");
  return str;
};

console.log(capitalize("heLlo wOrLd!"));
