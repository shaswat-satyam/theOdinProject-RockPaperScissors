const elements = ['Rock','Paper','Scissors'];
var computerScore = 0;
var playerScore = 0;
const scorecard = document.getElementById("scorecard");
const computer = document.getElementById("computer");
const player = document.getElementById("player");
const history = document.getElementById("history");
const body = document.body;

var i = 0;


function computerPlay() {
    return Math.floor(Math.random() * 3);
};

function roundPlay(choice){
    i++
    var computerChoice = computerPlay();

    computer.textContent = "Computer played "+ elements[computerChoice]; 
    player.textContent = "You Played "+ elements[choice];

    var move = computerChoice - choice;

    if(move == 0){
        scorecard.textContent = "A Tie! Both used "+ elements[computerChoice];
    }

    if(move == 1 || move == -2){
        computerScore += 1;
        scorecard.textContent = "Computer Wins! "+ elements[computerChoice] + " beats " + elements[choice];
    }
    
    else if(move == 2 || move == -1){
        playerScore += 1;
        scorecard.textContent = "Player Wins! " + elements[choice]+ " beats " + elements[computerChoice];
    }

    
    var row = history.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.textContent = i;
    cell2.textContent = playerScore;
    cell3.textContent = computerScore;

    winnerCheck();

}

function winnerCheck(){
    if(playerScore == 5){
        scorecard.textContent = "The Player won the game";
        body.style.backgroundColor = "green";
    }

    if(computerScore == 5){
        scorecard.textContent = "The Computer won the game";
        body.style.backgroundColor = "red";
    }

};

