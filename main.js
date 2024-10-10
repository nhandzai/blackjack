import { addCard, randomSuit } from "./card.js"
import { randomChoice, resetNumberPool } from "./cardPool.js"

const playerSection = document.querySelector('.player')
const dealerSection = document.querySelector('.dealer')

const resetButton = document.querySelector('header .reset');
const doubleButton = document.querySelector('.button button:nth-child(1)')
const splitButton = document.querySelector('.button button:nth-child(2)')
const hitButton = document.querySelector('.button button:nth-child(3)')
const standButton = document.querySelector('.button button:nth-child(4)')

resetButton.addEventListener('click',()=>{
    clearCards(playerSection)
    clearCards(dealerSection)
    game()
})
doubleButton.addEventListener('click',()=>{
    hitCard(dealerSection)
})
splitButton.addEventListener('click',()=>{
    hitCard(dealerSection)
})
hitButton.addEventListener('click', () => {
    hitCard(playerSection)
});
standButton.addEventListener('click', () => {
    deleteCard(dealerSection)
    hitCard(dealerSection)
});

function hitCard(section)
{
    const suit = randomSuit()
    const rank = randomChoice()
    const cardName = suit+rank
    addCard(section, cardName)
}

function game() {
    resetNumberPool()
    hitCard(dealerSection)
    hitCard(playerSection)
    addCard(dealerSection,'Back Red 1')
}

function deleteCard(section) {
    const cards = section.querySelectorAll('img')
    if (cards.length > 0) {
        const lastCard = cards[cards.length - 1]
        lastCard.remove();
    } else 
        console.log("No cards to remove")
}
function clearCards(section) {

    const cards = section.querySelectorAll('img')
    cards.forEach(card => card.remove())
}
game()
