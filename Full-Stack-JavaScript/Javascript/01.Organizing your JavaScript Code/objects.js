// Objects as a Design Pattern

// ex 1
const playerOneName = "Tim";
const playerTwoName = "Jenn";
const playerOneMaker = "X";
const playerTwoMaker = "O";

// Ex 2
const playerOne = {
  name: "Mark",
  marker: "XX",
};

const playerTwo = {
  name: "Sarah",
  marker: "YY",
};

console.log(playerOne);
console.log(playerTwo);

// Ex 3
const printName = (player) => player.name;

console.log(printName(playerOne));

const gameOver = (winningPlayer) => {
  console.log("YaY");
  console.log(`${winningPlayer.name} is the winner ^^`);
};

gameOver(playerTwo);

// Object Constructors

// ex 1
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}

const player1 = new Player("balou", "**");
const player2 = new Player("mimi", "&&");
player1.sayName();
player2.sayName();
