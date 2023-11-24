'use strict';

function disableButtons(){
    let buttons = document.querySelectorAll('button');
            for( let button of buttons ){
                button.disabled = true;
            }
}


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
    let tieScore = 0;

    //event listners

    let container = document.querySelector('.boxOfButtons');
    
    container.addEventListener( 'click' , (event) => {
        let targetButton = event.target;
        let result = document.querySelector( '.resultBox');
        let roundsBox = document.querySelector('.roundsResults');
        
        let computerChoice = getComputerChoice();

        let roundOutcome = singleRound(targetButton.id , computerChoice )
        
        if( roundOutcome == 1 ){
            userScore++;
            result.textContent = "You Win this round! "+targetButton.id+" beats "+computerChoice;
        }
        else if( roundOutcome == 2){
            computerScore++;
            result.textContent = "You Lose this round! "+targetButton.id+" loses to "+computerChoice;
        }
        else if( roundOutcome == 0){
            tieScore++;
            result.textContent = "Tie round -_-"
        }

        roundsBox.textContent = `You: ${userScore} || Computer: ${computerScore} || Tie: ${tieScore}`;

        if( userScore == 5){
            roundsBox.textContent = "You win the game!"
            disableButtons();
            
        }
        else if( computerScore == 5){
            roundsBox.textContent = "You lose the game ):"
            disableButtons();
        }

    });

   
    //  compare score to declare winner
    
}

game();