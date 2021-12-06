const repeatString = (string_, nb) => {
	let temporary = string_;

	if (nb < 0) {
		return 'ERROR';
	}

	if (nb == 0) {
		string_ = '';
		return string_;
	}

	for (let i = 1; i < nb; i++) {
		temporary += string_;
	}

	return temporary;
};

// Do not edit below this line
module.exports = repeatString;
