
function randomNum(){
    return Math.floor(Math.random() * 3);
}
const playerSelection = prompt("what you picking?", '');
const computerSelection = getComputerChoice();

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