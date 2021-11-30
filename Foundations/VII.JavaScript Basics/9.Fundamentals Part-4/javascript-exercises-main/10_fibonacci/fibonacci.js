const fibonacci = (position) => {
  const num = 100;
  let fibonacci = [0, 1];

  if (position < 0) {
    return 'OOPS';
  }

  for (let i = 0; i < num; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
  }

  return (parseInt((fibonacci[position])));
};

// Do not edit below this line
module.exports = fibonacci;
