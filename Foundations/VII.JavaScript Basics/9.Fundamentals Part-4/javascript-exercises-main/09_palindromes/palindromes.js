const palindromes = string_ => {
	const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
	string_ = string_.toLowerCase().replace(regex, '');
	string_ = string_.split(' ').join('');
	let reversedString = '';
	reversedString = string_.split('').reverse().join('');

	if (string_ === reversedString) {
		return true;
	}

	return false;
};

// Do not edit below this line
module.exports = palindromes;
