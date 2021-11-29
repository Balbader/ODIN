const palindromes = string_ => {
	const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
	let reversedString = '';

	string_ = string_.toLowerCase().replace(regex, '');
	string_ = string_.split(' ').join('');
	reversedString = string_.split('').reverse().join('');

	if (string_ === reversedString) {
		return true;
	}

	return false;
};

// Do not edit below this line
module.exports = palindromes;
