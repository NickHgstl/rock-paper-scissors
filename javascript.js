let computerChoiche = 3;
let computerWeapon = "paper";
let computerWin = 0;
let playerWin = 0;

function getRandomInt() {
    return Math.floor(Math.random() * 3)
    
}

function getComputerChoiche(){
    if (getRandomInt(computerChoiche) == 0)
        computerWeapon = "rock"

    else if (getRandomInt(computerChoiche) == 2)
        computerWeapon = "scissors"
    
}

function playRound(){
    getComputerChoiche()
    let playerWeapon = prompt("rock paper or scissors?")
    
    if (computerWeapon == "rock" && playerWeapon == "rock")
    console.log("rock vs rock: draw")

    if (computerWeapon == "rock" && playerWeapon == "paper")
    console.log("paper vs rock: paper wins")
    playerWin++
    
    if (computerWeapon == "rock" && playerWeapon == "scissors")
    console.log("scissors vs rock: scissors wins")
    playerWin++

    if (computerWeapon == "paper" && playerWeapon == "rock")
    console.log("rock vs paper: paper wins")

    if (computerWeapon == "paper" && playerWeapon == "paper")
    console.log("paper vs paper: draw")

    if (computerWeapon == "paper" && playerWeapon == "scissors")
    console.log("scissors vs paper: scissors wins")
    playerWin++

    if (computerWeapon == "scissors" && playerWeapon == "rock")
    console.log("rock vs scissors: rock wins")
    playerWin++

    if (computerWeapon == "scissors" && playerWeapon == "paper")
    console.log("paper vs scissors: scissors wins")
    computerWin++

    if (computerWeapon == "scissors" && playerWeapon == "scissors")
    console.log("scissors vs scissors: draw")
}

function score(){
    playRound()
    console.log(playerWin)
    console.log(computerWin)
}
score()