const findTheOldest = people => {
	let count = 0;
	let result;
	const thisYear = new Date().getFullYear();
	for (const person of people) {
		const age = (person.yearOfDeath - person.yearOfBirth)
			|| (thisYear - person.yearOfBirth);
		if (age > count) {
			count = age;
			result = person;
		}
	}

	return result;
};

// Do not edit below this line
module.exports = findTheOldest;
