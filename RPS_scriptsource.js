// function Player1(move) {
//     if (move === "rock") {
//         return "it's a tie!"
//     }

//     else if (move === "paper") {
//         return "You win!"
//     }

//     else {
//         return "You Lose!"
//     }
// }
// console.log(Player1("rock"));

function Player1(move) {
    this.move = move;
}

function Player2(move) {
    this.move = move;
}


function Ref(Player1, Player2) {
    this.Player1 = Player1;
    this.Player2 = Player2;

    this.theCall = function(Player1, Player2) {
        if (Player1 === Player2) {
            return "It's a tie! Great Game!";
       }
       
       if (Player1 === "rock" && Player2 === "paper") {    
               return "Player2 wins! Better luck next time!";
       }

        if (Player1 === "paper" && Player2 === "scissors") {
               return "Player2 wins! Better luck next time!";
        }

        if (Player1 === "scissors" && Player2 === "rock") {
               return "Player2 wins! Better luck next time!";
       }

       else {
           return "Player1 wins! Congratulations";
       }
    }
}

function playGame(event) {
    let userMove = event.target.value;
    let options = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * options.length);
    let compMove = options[randomIndex];

    let winner = Ref(userMove, compMove);
    let userMoveText = `The user chose ${userMove}\n`;
    let compMoveText = `The computer chose ${compMove}\n`;
    let finalText = userMoveText + compMoveText + winner;

    let winnerLocation = document.querySelector(".text");
    winnerLocation.innerText = finalText; 
}

    let buttons = document.getElementsByClassName("button");
    for (let i=0; i < buttons.length; i++) {
        let button = buttons[i];
        // console.log(buttons[i]);
        button.onclick = playGame;
    }
