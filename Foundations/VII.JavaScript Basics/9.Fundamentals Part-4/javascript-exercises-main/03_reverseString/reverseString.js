const reverseString = string => {
	if (string === '') {
		return string;
	}

	return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
