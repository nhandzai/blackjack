import { addCard, randomSuit } from "./card.js"
import { randomChoice, resetNumberPool } from "./cardPool.js"
import { changeNumber } from "./wallet.js"

let split = false
let dealerScore = 0
let playerScore = 0

const playerSection = document.querySelector('.player')
const dealerSection = document.querySelector('.dealer')
const resetButton = document.querySelector('header .reset');
const doubleButton = document.querySelector('.button button:nth-child(1)')
const splitButton = document.querySelector('.button button:nth-child(2)')
const hitButton = document.querySelector('.button button:nth-child(3)')
const standButton = document.querySelector('.button button:nth-child(4)')
const playButton = document.querySelector('.wallet .button button:nth-child(2)')
const betNumber = document.querySelector('#pool-bet-number')
const walletNumber = document.querySelector('#your-wallet-number')


resetButton.addEventListener('click',()=>{
    clearCards(playerSection)
    clearCards(dealerSection)
    clearPlayerSectioon()
})
doubleButton.addEventListener('click',()=>{
    hitCard(dealerSection)
})
splitButton.addEventListener('click',()=>{
    const newSection = document.createElement('section');
    newSection.className = "player" 
    document.querySelector('.board').appendChild(newSection);
    split = true
})
hitButton.addEventListener('click', () => {
    hitCard(playerSection)
});
standButton.addEventListener('click', () => {
    deleteCard(dealerSection)
    hitCard(dealerSection)
});
playButton.addEventListener('click', () => {
    hitCard(playerSection)
    hitCard(dealerSection)
    hitCard(playerSection)
    addCard(dealerSection,'Back Red 1')
});

function hitCard(section,score)
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
    hitCard(playerSection)
    addCard(dealerSection,'Back Red 1')
    walletNumber.textContent = changeNumber(walletNumber,500)
}
function clearPlayerSectioon() {
    if (split) {
        const extraPlayerSection = document.querySelector('.board .player:nth-child(2)');
        if (extraPlayerSection) {
            extraPlayerSection.remove();
        }
        split = false;
    }
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
