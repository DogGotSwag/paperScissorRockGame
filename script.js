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
    playerChoice = playerChoice.toLowerCase();
    let result = "";

    if(playerChoice == computerChoice){
        return "It's a tie"
    }

    else if( playerChoice == "rock" && computerChoice == "paper"){
        result = "You Lose! Paper beats Rock";
    }

    else if( playerChoice == "rock" && computerChoice == "scissor"){
        result = "You Win! Rock beats Scissors";
    }
    
    else if( playerChoice == "paper" && computerChoice == "rock"){
        result = "You Win! Paper beats Rock";
    }

    else if( playerChoice == "paper" && computerChoice == "scissor"){
        result = "You Lose! Scissors beats Paper"
    }

    else if( playerChoice == "scissor" && computerChoice ==  "rock"){
        result = "You Lose! Rock beats Scissors";
    }

    else if( playerChoice == "scissor" && computerChoice == "paper"){
        result = "You Win! Scissors beats Paper"
    }


    return result;
}

function game(){
    let playerSelection = ""
    for(let i = 0; i < 5; i++){
        console.log(singleRound( playerSelection = prompt("Player Choice") ,getComputerChoice() ));
    }
}

game();