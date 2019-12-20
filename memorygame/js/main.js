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

const initialBoardSet = () => {
    for (let i = 0; i < cards.length; i++) {
        $('#game-board').append('<img src="images/back.png" alt="Back of Cards" />');
    }
}

const clickTheCard = () => {
    $('img').on('click', function() {
        let randomIndex = selectRandomCard();
        let newSource = cards[randomIndex].cardImage;
        let newAlt = cards[randomIndex].rank + ' of ' + cards[randomIndex].suit;

        $(this).attr('src', newSource);
        $(this).attr('alt', newAlt);

        selectedCards.push(cards[randomIndex]);
        cards.splice(randomIndex, 1);

        checkTheChoices();
    });
}

const checkTheChoices = () => {
    if (selectedCards.length === 2) {
        if (selectedCards[0].rank === selectedCards[1].rank) {
            alert('You found the card!');

        } else {
            alert('Sorry, try again.');
        }
        location.reload();
    }
}

const selectRandomCard = () => {
    let randomIndex = Math.floor(Math.random() * Math.floor(cards.length));
    return randomIndex;
}

const runApp = () => {
    initialBoardSet();
    clickTheCard();
}

$(() => {
    runApp();
});