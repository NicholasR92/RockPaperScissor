
function randomNum(){
    return Math.floor(Math.random() * 3);
}

function getComputerChoice(){
    let choice = randomNum();
    if (choice === 2){
        return "Rock";
    }else if(choice === 1){
        return "Paper";
    } else if(choice === 0){
        return "Scissors"; 
    } 
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK" || 
       playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS" || 
       playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() == "PAPER"){
        return "Player Wins";
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS" || 
              playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() == "PAPER" || 
              playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() == "ROCK") {
        return "You lose";
    } else{
        return "Seems great minds think a like";
    }
}

let playerScore = 0;
let computerScore = 0;


const computerSelection = getComputerChoice();

const body = document.querySelector('body');


const rockButton = document.createElement('button');
rockButton.style.backgroundColor = "Orange";
rockButton.style.color = 'white';
rockButton.style.width = "200px";
rockButton.textContent = "Rock";

const paperButton = document.createElement('button');
paperButton.style.backgroundColor = "Blue";
paperButton.style.color = 'white';
paperButton.style.width = "200px";
paperButton.textContent = "Paper";

const scissorButton = document.createElement('button');
scissorButton.style.backgroundColor = "grey";
scissorButton.style.color = 'white';
scissorButton.style.width = "200px";
scissorButton.textContent = "Scissor";


rockButton.addEventListener('click', () => { 
    let playerSelection = 'rock' 
    results.textContent = (playRound(playerSelection, computerSelection));
    
});

paperButton.addEventListener('click', () => { 
    let playerSelection = 'paper' 
    results.textContent = (playRound(playerSelection, computerSelection));
    
});

scissorButton.addEventListener('click', () => { 
    let playerSelection = 'scissors' 
    results.textContent = (playRound(playerSelection, computerSelection));
    
});

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorButton);


const results = document.createElement('div');
results.setAttribute('style', 'border: solid; width: 400px; height: 350px;')


body.appendChild(results);


/* function game(){
    for (let i = 0; i < 5; i++) {
            let playerSelection = prompt("what you picking?", '');
            let computerSelection = getComputerChoice();
            let round = playRound(playerSelection, computerSelection);
            console.log(round);
    
            if(round === "Player Wins") {
                playerScore++;
                console.log(playerSelection + " beats " + computerSelection);
            } else if (round === "You lose") {
                computerScore++;
                console.log(computerSelection + " beats " + playerSelection);
        } 
    }  console.log('Player: ' + playerScore);
       console.log('Computer: ' + computerScore);
 } */


//const playerSelection = prompt("what you picking?", '');
//const computerSelection = getComputerChoice();


//game();

