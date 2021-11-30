const fibonacci = (input) => {
  const num = 100;
  let fibonacci = [0, 1];
  let result;

  if (input < 0) {
    return 'OOPS';
  }

  if (input === '2') {
    return 1;
  }

  if (typeof (input) === 'string') {
    input = parseInt(input);
  }

  for (let i = 1; i < num; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
  }
  result = parseInt(fibonacci[input]);
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
