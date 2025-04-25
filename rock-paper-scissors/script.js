const options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

function getHumanChoice() {
    let choice = Number(prompt(`
        Choose an option: 
         1 - Rock
         2 - Paper
         3 - Scissors
    `));
    return options[choice - 1];
}
