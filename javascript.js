let computerChoiche = 3;
let computerWeapon = "";
let computerWin = 0;
let playerWin = 0;
let playerWeapon = "";
let roundCount = 0;

const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');
const div = document.createElement('div');
    document.body.appendChild(div);
const p1 = document.createElement('p1');
    document.body.appendChild(p1);

btnRock.addEventListener('click',function(e){
    playerWeapon = "rock";
    score();
});

btnPaper.addEventListener('click',function(e){
    playerWeapon = "paper";
    score();
});

btnScissors.addEventListener('click',function(e){
    playerWeapon = "scissors";
    score();
});

function getRandomInt() {
    return Math.floor(Math.random() * 3)
}

function getComputerChoiche(){
    if (getRandomInt(computerChoiche) == 0)
        computerWeapon = "rock";

    if (getRandomInt(computerChoiche) == 1)
        computerWeapon = "paper"; 

    else if (getRandomInt(computerChoiche) == 2)
        computerWeapon = "scissors"
    
}

function playRound(){
    getComputerChoiche()
    
    if (computerWeapon == "rock" && playerWeapon == "rock"){
        div.textContent = "draw"
        return div;
    }

    if (computerWeapon == "rock" && playerWeapon == "paper"){
        div.textContent = "paper vs rock: player wins!";
        playerWin++
        return div;
    }
    
    if (computerWeapon == "rock" && playerWeapon == "scissors"){
        div.textContent = "scissors vs rock: computer wins!";
        computerWin++
        return div;
    }

    if (computerWeapon == "paper" && playerWeapon == "rock"){
        div.textContent = "rock vs paper: computer wins!";
        computerWin++
        return div;
    }

    if (computerWeapon == "paper" && playerWeapon == "paper"){
        div.textContent = "paper vs paper: draw";
        return div;
    }

    if (computerWeapon == "paper" && playerWeapon == "scissors"){
        div.textContent = "scissors vs paper: player wins!";
        playerWin++
        return div;
    }

    if (computerWeapon == "scissors" && playerWeapon == "rock"){
        div.textContent = "rock vs scissors: player win!";
        playerWin++
        return div;
    }

    if (computerWeapon == "scissors" && playerWeapon == "paper"){
        div.textContent = "paper vs scissors: computer wins!"
        computerWin++
        return div;
    }

    if (computerWeapon == "scissors" && playerWeapon == "scissors"){
        div.textContent = "scissors vs scissors: draw"
        return div;
    }
}
function score(){
    playRound();
        if ( playerWin == 5){
            p1.textContent = (`${playerWin} - ${computerWin}"game over!";`)
            playerWin == 0;
            computerWin == 0;
            return p1;
    }
        if ( computerWin == 5){
        p1.textContent = (`${playerWin} - ${computerWin}"game over!";`)
        playerWin == 0;
        computerWin == 0;
        return p1;
        }
        
        else {
            p1.textContent = (`${playerWin} - ${computerWin}  "next round!";`)
            return p1;
    }
}
