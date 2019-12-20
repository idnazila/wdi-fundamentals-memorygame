const memoryGame = {
    cards: [{
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
    ],
    selectedCards: [],
    setTheBoard: gameDeck => {
        gameDeck.forEach(function() {
            $('#game-board').append('<img src="images/back.png" alt="Back of Cards" />');
        });
        memoryGame.clickTheCard();
        return;
    },
    clickTheCard: () => {
        $('img').on('click', e => {

            let randomIndex = memoryGame.randomNumber(memoryGame.cards);

            $(e.currentTarget).attr({
                src: memoryGame.cards[randomIndex].cardImage,
                alt: memoryGame.cards[randomIndex].rank + ' of ' + memoryGame.cards[randomIndex].suit
            });

            memoryGame.selectedCards.push(memoryGame.cards[randomIndex]);
            memoryGame.cards.splice(randomIndex, 1);

            memoryGame.checkTheChoices();
        });
    },
    checkTheChoices: () => {
        if (memoryGame.selectedCards.length === 2) {
            memoryGame.selectedCards[0].rank === memoryGame.selectedCards[1].rank ? alert('You found the card!') : alert('Sorry, try again.');

            setTimeout(function() { location.reload(); }, 750)
        }
    },
    randomNumber: arr => {
        return Math.floor(Math.random() * Math.floor(arr.length));
    },
    runApp: () => {
        memoryGame.setTheBoard(memoryGame.cards);
    }
}

$(() => {
    memoryGame.runApp();
});