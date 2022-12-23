let playerScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();


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


function endGame(){
    if(playerScore === 5){
        return 'GAME OVER: PLAYER WINS'
    } else if(computerScore === 5){
        return 'GAME OVER: COMPUTER WINS'
    } else{
        return '';
    }
};


function playRound(playerSelection, computerSelection){
    
    if(playerScore === 5 || computerScore === 5){
        return endGame()
    } else if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK" || 
       playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS" || 
       playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() == "PAPER"){
        return 'player ' + ++playerScore + " computer " + computerScore;
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS" || 
              playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() == "PAPER" || 
              playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() == "ROCK") {
        return 'player ' + playerScore + " computer " + ++computerScore;
    } else{
        return "Seems great minds think a like";
    } 
}

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

const scoreboard = document.createElement('div');
scoreboard.setAttribute('style', 'border: solid; width: 400px; height: 350px;');

const results = document.createElement('div');
results.setAttribute('style', 'border: solid; width: 200px; height: 100px; color: red;');


body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorButton);
body.appendChild(scoreboard);

rockButton.addEventListener('click', () => {  
    scoreboard.textContent = playRound('rock',computerSelection);
    console.log (computerSelection)
    
});

paperButton.addEventListener('click', () => { 
    scoreboard.textContent = playRound('paper',computerSelection);
    
});

scissorButton.addEventListener('click', () => { 
    scoreboard.textContent = playRound('scissors',computerSelection);
    
});


  


//const playerSelection = prompt("what you picking?", '');
//const computerSelection = getComputerChoice();




