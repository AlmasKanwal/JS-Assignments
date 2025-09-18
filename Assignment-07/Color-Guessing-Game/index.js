// All available game colors
var availableColors = ["#f48fb1", "#ec407a", "#ab47bc", "#42a5f5", "#26a69a", "#ffca28", "#ef5350", "#c6e75a"];

// Game state
var sequenceToRemember = [];
var playerSequence = [];
var difficultyLevel = "";
var currentRound = 1;
var playerScore = 0;
var colorsInPlay = 4;
var gameActive = false;

// DOM Elements
var messageBox = document.getElementById("game-message");
var sequenceContainer = document.getElementById("sequence-display");
var colorOptionsContainer = document.getElementById("color-options");
var scoreBox = document.getElementById("score-display");

var restartBtn = document.getElementById("restartBtn");
var exitBtn = document.getElementById("exitBtn");
var levelSelect = document.getElementById("level-select");

// Set difficulty level
function setLevel(level) {
    difficultyLevel = level;
    if (level === "easy") colorsInPlay = 4;
    if (level === "medium") colorsInPlay = 6;
    if (level === "hard") colorsInPlay = 8;

    currentRound = 1;
    playerScore = 0;
    scoreBox.innerText = "Score: " + playerScore;

    levelSelect.style.display = "none";
    restartBtn.style.display = "inline-block";
    exitBtn.style.display = "inline-block";
    gameActive = true; 

    startRound();
}

// Start each round
function startRound() {
    if (!gameActive) return;

    sequenceToRemember = [];
    playerSequence = [];
    sequenceContainer.innerHTML = "";
    colorOptionsContainer.innerHTML = "";

    // generate random sequence
    for (var i = 0; i < currentRound; i++) {
        var randomColor = availableColors[Math.floor(Math.random() * colorsInPlay)];
        sequenceToRemember.push(randomColor);
    }

    // show sequence
    for (var i = 0; i < sequenceToRemember.length; i++) {
        var seqColor = document.createElement("div");
        seqColor.className = "color-btn";
        seqColor.style.background = sequenceToRemember[i];
        sequenceContainer.appendChild(seqColor);
    }

    // hide sequence after short delay
    setTimeout(function () {
        if (!gameActive) return;
        sequenceContainer.innerHTML = "";
        messageBox.innerText = "Now repeat the sequence!";
        showColorOptions();
    }, 1500);
}

// Show color choices
function showColorOptions() {
    colorOptionsContainer.innerHTML = "";
    for (var i = 0; i < colorsInPlay; i++) {
        var btn = document.createElement("div");
        btn.className = "color-btn";
        btn.style.background = availableColors[i];
        btn.setAttribute("data-color", availableColors[i]);

        btn.onclick = function () {
            if (!gameActive) return;
            var chosenColor = this.getAttribute("data-color");
            playerSequence.push(chosenColor);

            // check move
            if (playerSequence[playerSequence.length - 1] !== sequenceToRemember[playerSequence.length - 1]) {
                messageBox.innerText = "❌ Wrong! Game Over!";
                colorOptionsContainer.innerHTML = "";
                return;
            }

            // round passed
            if (playerSequence.length === sequenceToRemember.length) {
                playerScore++;
                currentRound++;
                scoreBox.innerText = "Score: " + playerScore;
                messageBox.innerText = "✅ Correct! Next Round...";
                setTimeout(startRound, 1000);
            }
        };
        colorOptionsContainer.appendChild(btn);
    }
}

// Restart game
function restartGame() {
    currentRound = 1;
    playerScore = 0;
    scoreBox.innerText = "Score: " + playerScore;
    gameActive = true;
    startRound();
}

// Exit game
function exitGame() {
    difficultyLevel = "";
    currentRound = 1;
    playerScore = 0;
    gameActive = false;
    scoreBox.innerText = "";
    messageBox.innerText = "Choose a level to start";
    sequenceContainer.innerHTML = "";
    colorOptionsContainer.innerHTML = "";
    restartBtn.style.display = "none";
    exitBtn.style.display = "none";
    levelSelect.style.display = "block";
}