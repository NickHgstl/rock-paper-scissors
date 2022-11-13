

function getRandomInt() {
    return Math.floor(Math.random() * 3)
    
}


let computerChoice = getRandomInt();

function getComputerChoice(){
     if (computerChoice == 2)
     console.log("rock")
        

     if (computerChoice == 1)
     console.log("paper")

     if (computerChoice == 0)
     console.log("scissors")

     
        
    
} 

console.log(getComputerChoice());