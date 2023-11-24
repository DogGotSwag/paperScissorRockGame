'use strict';
function getComputerChoice(){
    let number = Math.floor(Math.random()*3); // 0-2
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
    // result == 1 means user is winner
    //  == 0 means tie
    // == 2 means Computer winner
    playerChoice = playerChoice.toLowerCase();
    let result = 0;

    if(playerChoice == computerChoice){         // run through all variations
        console.log("It's a tie");
        result = 0;
    }

    else if( playerChoice == "rock" && computerChoice == "paper"){
        console.log("You Lose! Paper beats Rock");
        result = 2;
    }

    else if( playerChoice == "rock" && computerChoice == "scissor"){
        console.log("You Win! Rock beats Scissors");
        result = 1;
    }
    
    else if( playerChoice == "paper" && computerChoice == "rock"){
        console.log("You Win! Paper beats Rock");
        result = 1;
    }

    else if( playerChoice == "paper" && computerChoice == "scissor"){
        console.log("You Lose! Scissors beats Paper");
        result = 2;
    }

    else if( playerChoice == "scissor" && computerChoice ==  "rock"){
        console.log("You Lose! Rock beats Scissors");
        result = 2;
    }

    else if( playerChoice == "scissor" && computerChoice == "paper"){
        console.log("You Win! Scissors beats Paper");
        result = 1;
    }

    return result;
}

function game(){
    // declare score
    let userScore = 0;
    let computerScore = 0;

    //event listners

    let container = document.querySelector('.boxOfButtons');
    
    container.addEventListener( 'click' , (event) => {
        let targetButton = event.target;
        let result = document.querySelector( '.resultBox');
        
        singleRound(targetButton.id , getComputerChoice() );

    });

   
    //  compare score to declare winner
    if(userScore == computerScore){
        console.log("tie -_-");
    }
    else if( userScore > computerScore){
        console.log("User is Winner of match");
    }
    else{
        console.log("You Lose, Computer is Winner of the match");
    }
}

game();