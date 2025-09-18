var score = 0;
var currentQuestion = {};
var gameArea = document.getElementById("gameArea");
var scoreBox = document.getElementById("score");
var restartBtn = document.getElementById("restartBtn");
var exitBtn = document.getElementById("exitBtn");
var levelSelect = document.getElementById("levelSelect");
var startMessage = document.getElementById("startMessage");

// Start game
function setLevel(lv) {
    level = lv;
    score = 0;
    scoreBox.innerText = "Score: " + score;
    levelSelect.style.display = "none";  // hide levels
    restartBtn.style.display = "inline-block";
    exitBtn.style.display = "inline-block";
    nextQuestion();
}

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function nextQuestion() {
    gameArea.innerHTML = "";
    var num1, num2, answer;
    if (level === "easy") { num1 = getRandomInt(1, 10); num2 = getRandomInt(1, 10); }
    else if (level === "medium") { num1 = getRandomInt(10, 50); num2 = getRandomInt(10, 50); }
    else { num1 = getRandomInt(50, 100); num2 = getRandomInt(50, 100); }
    answer = num1 + num2;
    var hideNum = getRandomInt(1, 2);
    var questionText;
    if (hideNum === 1) { questionText = "? + " + num2 + " = " + answer; currentQuestion.answer = num1; }
    else { questionText = num1 + " + ? = " + answer; currentQuestion.answer = num2; }
    currentQuestion.text = questionText;

    // display question
    var qNode = document.createElement("p");
    var tNode = document.createTextNode(questionText);
    qNode.appendChild(tNode);
    gameArea.appendChild(qNode);

    // input box
    var input = document.createElement("input");
    input.setAttribute("id", "guessInput");
    input.setAttribute("placeholder", "Enter missing number");
    gameArea.appendChild(input);

    // guess button
    var btn = document.createElement("button");
    btn.innerText = "Guess";
    btn.onclick = checkAnswer;
    gameArea.appendChild(btn);

    // message
    var msg = document.createElement("p");
    msg.setAttribute("id", "message");
    msg.className = "message";
    gameArea.appendChild(msg);
}

function checkAnswer() {
    var userGuess = document.getElementById("guessInput").value;
    var msg = document.getElementById("message");
    if (userGuess === "") { msg.innerText = "⚠️ Enter a number!"; return; }
    if (parseInt(userGuess) === currentQuestion.answer) {
        msg.innerText = "✅ Correct!";
        score++;
        scoreBox.innerText = "Score: " + score;
        setTimeout(nextQuestion, 800);
    } else {
        msg.innerText = "❌ Wrong! Correct answer was " + currentQuestion.answer;
        setTimeout(nextQuestion, 1200);
    }
}

// Restart game
function restartGame() {
    score = 0;
    scoreBox.innerText = "Score: " + score;
    nextQuestion();
}

// Exit game
function exitGame() {
    gameArea.innerHTML = "";
    scoreBox.innerText = "";
    levelSelect.style.display = "block";   // show levels again
    restartBtn.style.display = "none";
    exitBtn.style.display = "none";
}