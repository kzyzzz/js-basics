function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return('Rock');
    }
    else if (choice === 1) {
        return('Paper');
    }
    else if (choice === 2) {
        return('Scissors');
    }
    return(choice);
}

function getPlayersChoise() {
    let choice;
    while (true) {
        choice = prompt('Your move (Rock, Paper, Scissors): ');
        if ( choice === 'Rock' || choice === 'Paper' || choice === "Scissors") {
            return choice;
        }
    } 
    return false;
}

function getResults(cpuChoice, playerChoice) {
    console.log ('Computer choose ', cpuChoice);
    console.log ('You choose ', playerChoice);

    if (cpuChoice === playerChoice) return 'Draw';

    if (cpuChoice === 'Rock' && playerChoice === 'Scossors') return 'Loose';
    if (cpuChoice === 'Rock' && playerChoice === 'Paper') return 'Win';

    if (cpuChoice === 'Paper' && playerChoice === 'Rock') return 'Loose';
    if (cpuChoice === 'Paper' && playerChoice === 'Scissors') return 'Win';

    if (cpuChoice === 'Scissors' && playerChoice === 'Paper') return 'Loose';
    if (cpuChoice === 'Scissors' && playerChoice === 'Rock') return 'Win';

}

for (let i = 0; i < 5; i++) {
    console.log(`It's a `, getResults(getComputerChoice(), getPlayersChoise()));
}
