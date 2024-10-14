function changeNumber(section, number) {
    const currentNum = Number(section.textContent); 
    const newNum = currentNum + number;             
    return newNum;                                  
}

export { changeNumber };