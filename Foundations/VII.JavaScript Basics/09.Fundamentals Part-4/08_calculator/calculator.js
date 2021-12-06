const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = array => {
	let result = 0;

	if (array.length === 0) {
		return 0;
	}

	if (array.length === 1) {
		return array[0];
	}

	for (const element of array) {
		result += element;
	}

	return result;
};

const multiply = array => {
	let result = 1;

	for (const element of array) {
		result *= element;
	}

	return result;
};

const power = (a, b) => a ** b;

const factorial = n => {
	if (n < 0) {
		return;
	}

	if (n < 2) {
		return 1;
	}

	return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
