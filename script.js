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

function playRound(playerChoice) {

    const cpuChoice = getComputerChoice();
    let outcome = 'Loose';

    if (cpuChoice === playerChoice) { outcome = 'Draw';
    }

    else if (cpuChoice === 'Rock' && playerChoice === 'Paper') { 
        playerWinCounter++;
        outcome = 'Win';
    }

    else if (cpuChoice === 'Paper' && playerChoice === 'Scissors') { 
        playerWinCounter++;
        outcome = 'Win';
    }

    else if (cpuChoice === 'Scissors' && playerChoice === 'Rock') { 
        playerWinCounter++;
        outcome = 'Win';
    }

    else { cpuWinCounter++; }

    let score = {cpuChoice, playerChoice, outcome, cpuWinCounter, playerWinCounter};
    showScore(score);

    if (cpuWinCounter == 5 || playerWinCounter == 5) {
        buttonDisable();
    }

    return score;

}

function buttonDisable() {
    const btns = document.querySelectorAll('button');
    btns.forEach( (button) => {
        button.disabled = true;
    })
    
    console.log(btns);
}

function showScore(score) {
    document.querySelector('#your-move').innerText = `You played ${score.playerChoice}`;
    document.querySelector('#cpu-move').innerText = `CPU played ${score.cpuChoice}`;
    document.querySelector('#score').innerText = `AND it's a ${score.outcome} | ${playerWinCounter} : ${cpuWinCounter}`;

}

function buttonCreate(name) {
    const button = document.createElement('button');
    button.textContent = name;
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        console.log(playRound(e.target.innerText));
    })
    return button;
}

function game(){
    const div = document.querySelector('#container');

    div.appendChild(buttonCreate('Rock'));
    div.appendChild(buttonCreate('Paper'));
    div.appendChild(buttonCreate('Scissors'));

    const recentMoves = document.createElement('div');

    const yourMove = document.createElement('div');
    yourMove.id = 'your-move';
   
    const cpuMove = document.createElement('div');
    cpuMove.id = 'cpu-move';

    const score = document.createElement('div');
    score.id = 'score';


    recentMoves.appendChild(yourMove);
    recentMoves.appendChild(cpuMove);
    recentMoves.appendChild(score);

    div.appendChild(recentMoves);

}


let cpuWinCounter = 0;
let playerWinCounter = 0;
game();