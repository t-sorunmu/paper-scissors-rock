const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const rockButton = document.getElementById("rock");

const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

let userChoice = "";
let userScore = 0;
let computerScore = 0;

const options = ["paper", "scissors", "rock"];

const computerChoice = options[Math.floor(Math.random() * options.length)];

function gameOutcome(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "tie";
    }
    switch (userChoice) {
        case "paper":
            if (computerChoice === "rock") {
                return "win";
            }
            if (computerChoice === "scissors") {
                return "lose";
            }
        case "scissors":
            if (computerChoice === "paper") {
                return "win";
            }
            if (computerChoice === "rock") {
                return "lose";
            }
        case "rock":
            if (computerChoice === "scissors") {
                return "win";
            }
            if (computerChoice === "paper") {
                return "lose";
            }
    }
}

function playGame(choice) {
    userChoice = choice;
    const outcome = gameOutcome(userChoice, computerChoice);
    if (outcome === "tie") {
        alert(`You both chose ${userChoice}. It's a tie!`);
    } else {
        (outcome === "win") ? userScore++ : computerScore++;
        displayScores();
        alert(`You chose ${userChoice} and the computer chose ${computerChoice}. You ${gameOutcome(userChoice, computerChoice)}!
        Your Score: ${userScore} | Computer's Score: ${computerScore}`);
    }
}

function displayScores () {
    userScoreDisplay.textContent=userScore.toString();
    computerScoreDisplay.textContent=computerScore.toString();
}

paperButton.addEventListener("click", () => {
    playGame(paperButton.id);
});

scissorsButton.addEventListener("click", () => {
    playGame(scissorsButton.id);
});

rockButton.addEventListener("click", () => {
    playGame(rockButton.id);
});

