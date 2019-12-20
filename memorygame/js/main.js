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

let selectedCards = [];

const setInitialBoard = () => {
    cards.forEach(e => { $('#game-board').append('<img src="images/back.png" alt="Back of Cards" />'); });
    clickTheCard();
}

const clickTheCard = () => {
    $('img').on('click', e => {

        let randomIndex = randomNumber();

        $(e.currentTarget).attr({
            src: cards[randomIndex].cardImage,
            alt: cards[randomIndex].rank + ' of ' + cards[randomIndex].suit
        });

        selectedCards.push(cards[randomIndex]);
        cards.splice(randomIndex, 1);

        checkTheChoices();
        console.log(e.currentTarget)
    });
}

const checkTheChoices = () => {
    if (selectedCards.length === 2) {
        selectedCards[0].rank === selectedCards[1].rank ? alert('You found the card!') : alert('Sorry, try again.');

        setTimeout(function() { location.reload(); }, 750)
    }
}

const randomNumber = () => {
    return Math.floor(Math.random() * Math.floor(cards.length));
}

const app = () => {
    setInitialBoard();
}

$(() => {
    app();
});