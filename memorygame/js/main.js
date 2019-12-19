let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

const checkForMatch = () => {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log('Sorry, try again.');
    }
}

const flipCard = cardId => {
    checkForMatch();
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
}

flipCard(2);