function playGame() {
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

    function playRound(humanChoice) {
        let computerChoice = getComputerChoice();
    
        if (
            (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
            (humanChoice === 'Paper' && computerChoice === 'Rock') ||
            (humanChoice === 'Scissors' && computerChoice === 'Paper')
        ) {
            alert(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            console.log(`Your Score: ${humanScore}`);
        }
    
        else if (
            (computerChoice === 'Rock' && humanChoice === 'Scissors') ||
            (computerChoice === 'Paper' && humanChoice === 'Rock') ||
            (computerChoice === 'Scissors' && humanChoice === 'Paper')
        ) {
            alert(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            console.log(`Computer Score: ${computerScore}`);
        }
    
        else {
            alert('Tie!');
        }
    }


    while (humanScore < 3 && computerScore < 3) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore === 3) {
        alert(`
            YOU WON THE GAME!!!

            Your Score: ${humanScore}
            Computer Score: ${computerScore}
        `);

        humanScore = 0;
        computerScore = 0;
        return;
    }

    if(computerScore === 3) {
        alert(`
            YOU LOST THE GAME!!!
            
            Your Score: ${humanScore}
            Computer Score: ${computerScore}
        `);

        humanScore = 0;
        computerScore = 0;
        return;
    }
}
