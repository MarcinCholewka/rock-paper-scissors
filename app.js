var name;
var rounds;
var user_div = document.getElementById('user-label');
var button = document.getElementById('greeter-button');
var output = document.getElementById('greeter-output');
var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById('user-score');
var computerScore_span = document.getElementById('computer-score');
var scoreBoard_div = document.querySelector('#output');
var result_p = document.querySelector('#result > p');
var rock_div = document.getElementById('Rock');
var paper_div = document.getElementById('Paper');
var scissors_div = document.getElementById('Scissors');
var games_p = document.getElementById('games-message');
var gameOver = 'GAME OVER!!! Press "Click to play" to play again.';


function computerMove() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = 'YOU WON : you played ' + userChoice + ', computer played ' + computerChoice;
    document.getElementById(userChoice).classList.remove('red-glow');
    document.getElementById(userChoice).classList.remove('yellow-glow');
    document.getElementById(userChoice).classList.add('green-glow');
    if (userScore >= rounds) {       
        alert(name + '. You won the entire game ' + userScore + ':' + computerScore + '.');
        alert(gameOver);
    }
}


function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = 'YOU LOST : you played ' + userChoice + ', computer played ' + computerChoice;
    document.getElementById(userChoice).classList.remove('green-glow');
    document.getElementById(userChoice).classList.remove('yellow-glow');
    document.getElementById(userChoice).classList.add('red-glow');
    if (computerScore >= rounds) {
        alert(name + '. You lost the entire game ' + userScore + ':' + computerScore + '.');
        alert(gameOver);
    }
};


function draw(userChoice, computerChoice) {
    result_p.innerHTML = 'ITS A DRAW : you played ' + userChoice + ', computer played ' + computerChoice;
    document.getElementById(userChoice).classList.remove('green-glow');
    document.getElementById(userChoice).classList.remove('red-glow');
    document.getElementById(userChoice).classList.add('yellow-glow');
};

function playerMove(userChoice) {
    var computerChoice = computerMove();
    if (userChoice === 'Rock' && computerChoice === 'Scissors') {
        win(userChoice, computerChoice);
    } else if (userChoice === 'Paper' && computerChoice === 'Rock') {
        win(userChoice, computerChoice);
    } else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
        win(userChoice, computerChoice);
    } else if (userChoice === 'Rock' && computerChoice === 'Paper') {
        lose(userChoice, computerChoice);
    } else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
        lose(userChoice, computerChoice);
    } else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
        lose(userChoice, computerChoice);
    } else if (userChoice === computerChoice) {
        draw(userChoice, computerChoice);
    }
};

function main() {
    rock_div.addEventListener('click', function() {
        playerMove('Rock');      
    })
    paper_div.addEventListener('click', function() {
        playerMove('Paper');
    })
    scissors_div.addEventListener('click', function() {
        playerMove('Scissors');
    })
};

button.addEventListener('click', function() {
    userScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore = 0;
    computerScore_span.innerHTML = computerScore;
    name = window.prompt('Hello. You want to play ??? What is your name?');
    if (name === 'null') {
        alert('This is not your name. Are you realy want to play???');
    } else if (name) {
        start();
    user_div.innerHTML = name;
    games = window.prompt('Hello ' + name + '. How many rounds you want to play to determine the winner ?');
    games_p.innerHTML = 'Win ' + games + ' rounds, to win the entire game.';
    rounds = parseInt(games);
    }
});

main();