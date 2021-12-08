// ============================================================================
// Objects as a Design Pattern
// ============================================================================

// Ex 1
const playerOneName = 'Tim';
const playerTwoName = 'Jenn';
const playerOneMaker = 'X';
const playerTwoMaker = 'O';

// Ex 2
const playerOne = {
	name: 'Mark',
	marker: 'XX',
};

const playerTwo = {
	name: 'Sarah',
	marker: 'YY',
};

console.log(playerOne);
console.log(playerTwo);

// Ex 3
const printName = player => player.name;

console.log(printName(playerOne));

const gameOver = winningPlayer => {
	console.log('YaY');
	console.log(`${winningPlayer.name} is the winner ^^`);
};

gameOver(playerTwo);

// ============================================================================
// Object Constructors
// ============================================================================

// Ex 1
function Player(name, marker) {
	this.name = name;
	this.marker = marker;
	this.sayName = function () {
		console.log(name);
	};
}

const player1 = new Player('balou', '**');
const player2 = new Player('mimi', '&&');
player1.sayName();
player2.sayName();

// Exercise
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${title} by ${author}, ${pages}, ${read}`;
	};
}

const theHobbit = new Book(
	'The Hobbit',
	'J.R.R. Tolkien',
	'295 pages',
	'not read yet',
);

console.log(theHobbit.info());

// ============================================================================
// The Prototype
// ============================================================================
