'use strict';
function getComputerChoice(){
    let number = Math.floor(Math.random()*3);
    let computerChoice = "";

    switch(number) {
        case 0: 
            computerChoice = "paper";
            break;
        case 1:
            computerChoice = "scissor";
            break;
        default:
            computerChoice = "rock";

    }
    return computerChoice;
}

function singleRound(  playerChoice, computerChoice){

}

let playerSelection = "";
singleRound( playerSelection = prompt("Player Choice") ,getComputerChoice() );
