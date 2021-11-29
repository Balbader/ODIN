const palindromes = string => {
	const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
	let reversedString = '';

	string = string.toLowerCase().replace(regex, '');
	string = string.split(' ').join('');
	reversedString = string.split('').reverse().join('');

	if (string === reversedString) {
		return true;
	}

	return false;
};

// Do not edit below this line
module.exports = palindromes;
