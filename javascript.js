let computerChoiche = 3;
let computerWeapon = "";
let computerWin = 0;
let playerWin = 0;
let playerWeapon = "";

const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissors = document.querySelector('#btn-scissors')

btnRock.addEventListener('click',function(e){
    playerWeapon = "rock"
    playRound();
});

btnPaper.addEventListener('click',function(e){
    playerWeapon = "paper"
    playRound();
});

btnScissors.addEventListener('click',function(e){
    playerWeapon = "scissors"
    playRound();
});

function getRandomInt() {
    return Math.floor(Math.random() * 3)  
}

function getComputerChoiche(){
    if (getRandomInt(computerChoiche) == 0)
        computerWeapon = "rock" 

    if (getRandomInt(computerChoiche) == 1)
        computerWeapon = "paper" 

    else if (getRandomInt(computerChoiche) == 2)
        computerWeapon = "scissors"
    
}

function playRound(){
    getComputerChoiche()
    
    if (computerWeapon == "rock" && playerWeapon == "rock"){
        console.log("rock vs rock: draw")
    }

    if (computerWeapon == "rock" && playerWeapon == "paper"){
        console.log("paper vs rock: paper wins")
        playerWin++
    }
    
    if (computerWeapon == "rock" && playerWeapon == "scissors"){
        console.log("scissors vs rock: rock wins")
        computerWin++
    }

    if (computerWeapon == "paper" && playerWeapon == "rock"){
        console.log("rock vs paper: paper wins")
        computerWin++
    }

    if (computerWeapon == "paper" && playerWeapon == "paper"){
        console.log("paper vs paper: draw")
    }

    if (computerWeapon == "paper" && playerWeapon == "scissors"){
        console.log("scissors vs paper: scissors wins")
        playerWin++
    }

    if (computerWeapon == "scissors" && playerWeapon == "rock"){
        console.log("rock vs scissors: rock wins")
        playerWin++
    }

    if (computerWeapon == "scissors" && playerWeapon == "paper"){
        console.log("paper vs scissors: scissors wins")
        computerWin++
    }

    if (computerWeapon == "scissors" && playerWeapon == "scissors"){
        console.log("scissors vs scissors: draw")
    }
}

/*function score(){
    for (let i = 0; i < 5; i++){
        playRound()
        console.log(playerWin)
        console.log(computerWin)
    }
}
score()*/