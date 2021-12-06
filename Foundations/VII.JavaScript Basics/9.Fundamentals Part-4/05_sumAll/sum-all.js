const sumAll = (a, b) => {
	let result = 0;
	let temporary;

	if (a < 0 || b < 0) {
		return 'ERROR';
	}

	if (isNaN(a) || isNaN(b)) {
		return 'ERROR';
	}

	if (typeof (a) === 'string' || typeof (b) === 'string') {
		return 'ERROR';
	}

	if (a > b) {
		temporary = a;
		a = b;
		b = temporary;
	}

	for (let i = a; i <= b; i++) {
		result += i;
	}

	return (result);
};

// Do not edit below this line
module.exports = sumAll;
