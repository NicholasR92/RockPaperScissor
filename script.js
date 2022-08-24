
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

function game(){
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
 } 


//const playerSelection = prompt("what you picking?", '');
//const computerSelection = getComputerChoice();
game();

