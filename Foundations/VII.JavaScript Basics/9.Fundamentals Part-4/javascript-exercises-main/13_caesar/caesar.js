const caesar = (str, shift) => {
	const alphabetLength = 26;
	return [...str].map((letter) => {
		const isLetter = (/^[a-z]$/i).test(letter);

		if (!(isLetter)) {
			return letter;
		}

		const isUpperCase = letter >= 'A' && letter <= 'Z';
		const start = isUpperCase ? 65 : 97;
		const newCodePoint = (((letter.codePointAt(0) - start) + shift) % alphabetLength) + start;
		const newShift = (((letter.codePointAt(0) - shift) + start) % alphabetLength) + shift;
		if (shift < 0) {
			return String.fromCodePoint(newShift);
		}
		return String.fromCodePoint(newCodePoint);
	}).join('');
};
// Do not edit below this line
module.exports = caesar;
