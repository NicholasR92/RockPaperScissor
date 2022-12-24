let playerScore = 0;
let computerScore = 0;


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
    console.log("inside end game");
    if(playerScore === 5){
        console.log('player wins')
        return 'GAME OVER: PLAYER WINS'
    } else if(computerScore === 5){
        console.log('computer wins')
        return 'GAME OVER: COMPUTER WINS'
    } else{
        return '';
    }
};


function playRound(playerSelection, computerSelection){
    console.log(playerScore, computerScore);
    while(playerScore < 5 && computerScore < 5){
    if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK" || 
       playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS" || 
       playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() == "PAPER"){
        return 'player ' + ++playerScore + " computer " + computerScore;
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS" || 
              playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() == "PAPER" || 
              playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() == "ROCK") {
        return 'player ' + playerScore + " computer " + ++computerScore;
    } else{
        return 'player ' + playerScore + " computer " + computerScore;;
    }
     
    } 
    return endGame();
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
scoreboard.setAttribute('style', 'border: solid; width: 400px; height: 350px; margin: 50px auto;');

const choices = document.createElement('div');


const points = document.createElement('div');
choices.setAttribute('style', 'width: auto;')

scoreboard.appendChild(choices);
scoreboard.appendChild(points);
body.appendChild(scoreboard);
body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorButton);


rockButton.addEventListener('click', () => {  
    let computerSelection = getComputerChoice();
    choices.textContent = "Computer: " + computerSelection;
    points.textContent = playRound('rock',computerSelection);  
    });

paperButton.addEventListener('click', () => { 
    let computerSelection = getComputerChoice();
    choices.textContent = "Computer: " + computerSelection;
    points.textContent = playRound('paper',computerSelection);
    
});

scissorButton.addEventListener('click', () => { 
    let computerSelection = getComputerChoice();
    choices.textContent = "Computer: " + computerSelection;
    points.textContent = playRound('scissors',computerSelection);
    
});


  


//const playerSelection = prompt("what you picking?", '');
//const computerSelection = getComputerChoice();




