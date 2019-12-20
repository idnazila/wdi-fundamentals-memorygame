let cards = [{
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    }
];

const memoryGame = {
    setTheBoard: gameDeck => {
        gameDeck.forEach(function() {
            $('#game-board').append('<img src="images/back.png" alt="Back of Cards" />');
        });
        memoryGame.clickTheCard();
        return;
    },
    clickTheCard: () => {
        $('img').on('click', e => {

            let randomIndex = memoryGame.randomNumber(cards);

            $(e.currentTarget).attr({
                src: cards[randomIndex].cardImage,
                alt: cards[randomIndex].rank + ' of ' + cards[randomIndex].suit
            });

            selectedCards.push(cards[randomIndex]);
            cards.splice(randomIndex, 1);

            memoryGame.checkTheChoices();
        });
    },
    checkTheChoices: () => {
        if (selectedCards.length === 2) {
            selectedCards[0].rank === selectedCards[1].rank ? alert('You found the card!') : alert('Sorry, try again.');

            setTimeout(function() { location.reload(); }, 750)
        }
    },
    randomNumber: arr => {
        return Math.floor(Math.random() * Math.floor(arr.length));
    },
    runApp: () => {
        memoryGame.setTheBoard(cards);

    }
}

$(() => {
    memoryGame.runApp();
});