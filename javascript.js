function getRandomInt() {
    return Math.floor(Math.random() * 3)
    
}

let computerChoice = getRandomInt();

function getComputerChoice(){
     if (computerChoice == 2)
     return "rock"
        

     if (computerChoice == 1)
     return "paper"

     if (computerChoice == 0)
     return "scissors"

     
        
    
} 


function rockPaperScissors(playerSelection, computerSelection) {
   
    playerSelection = prompt("Rock, paper or scissors?")
    computerSelection = getComputerChoice()

    if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "rock")
        return "tie";

        else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "paper")
        return "paper wins";

        else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "scissors")
        return "rock wins";
        
    
    if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "paper")
        return "tie";

        else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "rock")
        return "paper wins";

        else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "scissors")
        return "scissors wins";

    
    if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "scissors")
        return "tie";

        else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "rock")
        return "rock wins";

        else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "paper")
        return "scissors wins";
}

console.log(rockPaperScissors());