const fibonacci = input => {
	const number_ = 100;
	const fibonacci = [0, 1];
	let result;

	if (input < 0) {
		return 'OOPS';
	}

	if (input === '2') {
		return 1;
	}

	if (typeof (input) === 'string') {
		input = Number.parseInt(input, 10);
	}

	for (let i = 1; i < number_; i++) {
		fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
	}

	result = Number.parseInt(fibonacci[input], 10);
	return result;
};

// Do not edit below this line
module.exports = fibonacci;
