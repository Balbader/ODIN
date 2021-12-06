const getTheTitles = books => {
	const titlesArray = [];
	for (const book of books) {
		titlesArray.push(book.title);
	}

	return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
