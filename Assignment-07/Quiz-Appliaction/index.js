// Quiz Data
var questions = [
    {
        question: "Which country has no mosquitoes?",
        options: ["Norway", "Iceland", "Finland", "Greenland"],
        correct: 1
    },
    {
        question: "Which country has over 17,000 islands?",
        options: ["Philippines", "Indonesia", "Japan", "Greece"],
        correct: 1
    },
    {
        question: "Which country eats most chocolate?",
        options: ["Belgium", "Switzerland", "Germany", "Austria"],
        correct: 1
    },
    {
        question: "Where is tipping at restaurants rude?",
        options: ["South Korea", "Japan", "China", "Thailand"],
        correct: 1
    },
    {
        question: "Japan's national flower that blooms 2 weeks?",
        options: ["Lotus", "Cherry Blossom", "Chrysanthemum", "Plum Blossom"],
        correct: 1
    },
    {
        question: "Ancient lighthouse wonder was in?",
        options: ["Babylon", "Rhodes", "Alexandria", "Halicarnassus"],
        correct: 2
    },
    {
        question: "Most venomous snakes country?",
        options: ["Brazil", "India", "Australia", "Indonesia"],
        correct: 2
    },
    {
        question: "Which country invented circus?",
        options: ["France", "Italy", "England", "Spain"],
        correct: 2
    },
    {
        question: "Largest chili pepper producer?",
        options: ["Mexico", "India", "China", "Thailand"],
        correct: 2
    },
    {
        question: "Most time zones country?",
        options: ["Russia", "United States", "China", "France"],
        correct: 3
    }
];

// Variables
var current = 0;
var answers = [];
var selected = -1;

// Start quiz
function start() {
    for (var i = 0; i < questions.length; i++) {
        answers[i] = -1;
    }
    showQuestion();
}

// Show question
function showQuestion() {
    var q = questions[current];

    document.getElementById('questionText').textContent = q.question;
 
    document.getElementById('questionCounter').textContent =
        'Question ' + (current + 1) + ' of ' + questions.length;

    var container = document.getElementById('optionsContainer');
    container.innerHTML = '';

    // Add options
    for (var i = 0; i < q.options.length; i++) {
        var option = document.createElement('div');
        option.className = 'option';
        option.textContent = q.options[i];
        option.onclick = function (index) {
            return function () { pick(index); };
        }(i);
        container.appendChild(option);
    }

    // Show previous selection
    selected = answers[current];
    if (selected !== -1) {
        container.children[selected].classList.add('selected');
    }

    document.getElementById('prevBtn').disabled = (current === 0);

    if (current === questions.length - 1) {
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'block';
    } else {
        document.getElementById('nextBtn').style.display = 'block';
        document.getElementById('submitBtn').style.display = 'none';
        document.getElementById('nextBtn').disabled = (selected === -1);
    }
}

// Pick option
function pick(index) {
    var container = document.getElementById('optionsContainer');

    if (selected !== -1) {
        container.children[selected].classList.remove('selected');
    }

    selected = index;
    answers[current] = index;
    container.children[index].classList.add('selected');

    if (current < questions.length - 1) {
        document.getElementById('nextBtn').disabled = false;
    }
}

function previousQuestion() {
    if (current > 0) {
        current--;
        showQuestion();
    }
}

// Next question  
function nextQuestion() {
    if (current < questions.length - 1 && selected !== -1) {
        current++;
        showQuestion();
    }
}

// Submit quiz
function submitQuiz() {
    var correct = 0;

    for (var i = 0; i < questions.length; i++) {
        if (answers[i] === questions[i].correct) {
            correct++;
        }
    }

    var score = Math.round((correct / questions.length) * 100);

    // Get message
    var message = '';
    if (score >= 90) message = '🎉 Amazing! World Expert!';
    else if (score >= 70) message = '🌟 Great! Global Traveler!';
    else if (score >= 50) message = '👍 Good! Keep exploring!';
    else message = '📚 Practice more!';

    // Hide quiz
    document.getElementById('quiz-content').style.display = 'none';

    // Show results
    var result = document.getElementById('result-container');
    result.innerHTML =
        '<div class="result-container">' +
        '<h2>🏆 Quiz Complete!</h2>' +
        '<div class="result-score">' + score + '%</div>' +
        '<div class="result-message">' + message + '</div>' +
        '<div class="result-details">You got ' + correct + ' out of ' + questions.length + ' correct!</div>' +
        '<button class="btn btn-primary" onclick="restart()" style="margin-top: 20px;">🔄 Try Again</button>' +
        '</div>';
    result.classList.remove('hidden');
}

// Restart quiz
function restart() {
    current = 0;
    answers = [];
    selected = -1;

    document.getElementById('result-container').innerHTML = '';
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('quiz-content').style.display = 'block';

    start();
}

// Start when page loads
window.onload = start;
