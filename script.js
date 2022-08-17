
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

const playerSelection = prompt("what you picking?", '');
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));