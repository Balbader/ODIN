// Const shift = (letter, k, code) => {
// return String.fromCharCode(((letter.charCodeAt() - code + k) % 26) + code);
// }

// const caesar = (s, k) => {
// return s.replace(/[a-z]/g, char => shift(char, k, 97)).replace(/[A-Z]/g, char => shift(char, k, 65));
// }

const caesar = (string, shift) => {
	let c = 0;
	let i = 0;

	while (string[i]) {
		if (string[i] >= 'A' && string[i] <= 'Z') {
			c = string[i] = 'A';
			c += shift;
			while (c < 0) {
				c += 26;
			}

			while (c > 25) {
				c -= 26;
			}

			string[i] = c + 'A';
		}

		if (string[i] >= 'a' && string[i] <= 'z') {
			c = string[i] = 'a';
			c += shift;
			while (c < 0) {
				c += 26;
			}

			while (c > 25) {
				c -= 26;
			}

			string[i] = c + 'a';
		}

		i++;
	}

	return string;
};

// Do not edit below this line
module.exports = caesar;
