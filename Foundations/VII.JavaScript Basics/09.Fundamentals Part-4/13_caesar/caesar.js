const caesar = (string_, shift) => {
	const alphabetLength = 26;
	if (shift < 0) {
		shift = 26 + (shift % 26);
	}

	return [...string_].map(letter => {
		const isLetter = (/^[a-z]$/i).test(letter);

		if (!(isLetter)) {
			return letter;
		}

		const isUpperCase = letter >= 'A' && letter <= 'Z';
		const start = isUpperCase ? 65 : 97;
		const newCodePoint = (((letter.codePointAt(0) - start) + shift) % alphabetLength) + start;
		return String.fromCodePoint(newCodePoint);
	}).join('');
};

// Do not edit below this line
module.exports = caesar;
