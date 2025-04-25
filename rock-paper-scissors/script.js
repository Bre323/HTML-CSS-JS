const options = ['Rock', 'Paper', 'Scissors'];
let [computerScore, humanScore] = [0, 0];

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

function playRound(humanChoice, computerChoice) {
    let humanValue = options[humanChoice];
    let computerValue = options[computerChoice];

    if (
        (humanValue === 'Rock' && computerValue === 'Scissors') ||
        (humanValue === 'Paper' && computerValue === 'Rock') ||
        (humanValue === 'Scissors' && computerValue === 'Paper')
    ) {
        console.log(`You Win! ${humanValue} beats ${computerValue}`);
        humanScore++;
    }

    else if (
        (computerValue === 'Rock' && humanValue === 'Scissors') ||
        (computerValue === 'Paper' && humanValue === 'Rock') ||
        (computerValue === 'Scissors' && humanValue === 'Paper')
    ) {
        console.log(`You Lose! ${computerValue} beats ${humanValue}`);
        computerScore++;
    }
}
