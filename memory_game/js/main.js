
const cards = ["queen", "queen", "king", "king"];

const cardOne = cards[0];
const cardTwo = cards[2];

const cardsInPlay = [];


function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {

	console.log("User flipped " + cards[cardId]);

	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}
flipCard(0);
flipCard(2);

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);
