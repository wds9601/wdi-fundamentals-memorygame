
const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-dimaonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

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

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);


	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}
flipCard(0);
flipCard(2);

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);
