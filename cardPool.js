const maxCount = 6; 
const numberCounts = new Array(13).fill(0); 
let resetPool = false;

function randomChoice() {
    if (resetPool) {
        numberCounts.fill(0);
        resetPool = false; 
    }
    const randomNumber = Math.floor(Math.random() * 13) + 1;
    if (numberCounts[randomNumber - 1] < maxCount) {
        numberCounts[randomNumber - 1]++; 
        return randomNumber; 
    } else {
        return randomChoice(); 
    }
}
function resetNumberPool() {
    resetPool = true; 
}

export { randomChoice, resetNumberPool };
