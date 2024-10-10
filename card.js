function addCard(Section, cardName) {
    const newCard = document.createElement('img');
    newCard.src = `/images/Cards Pack/PNG/Large/${cardName}.png`;
    Section.appendChild(newCard);
}

const suits = ['Hearts ', 'Diamond ', 'Clubs ', 'Spades '];
function randomSuit() {
    const randomIndex = Math.floor(Math.random() * suits.length); 
    return suits[randomIndex]; 
}

export { addCard, randomSuit };
