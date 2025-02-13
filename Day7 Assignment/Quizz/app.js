var Quiz = /** @class */ (function () {
    function Quiz(questions) {
        this.currentIndex = 0;
        this.score = 0;
        this.questions = questions;
    }
    Quiz.prototype.getCurrentQuestion = function () {
        return this.questions[this.currentIndex];
    };
    Quiz.prototype.checkAnswer = function (answer) {
        var isCorrect = answer === this.getCurrentQuestion().correctAnswer;
        if (isCorrect)
            this.score++;
        return isCorrect;
    };
    Quiz.prototype.nextQuestion = function () {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            return true;
        }
        return false;
    };
    Quiz.prototype.getScore = function () {
        return this.score;
    };
    Quiz.prototype.isQuizOver = function () {
        return this.currentIndex >= this.questions.length - 1;
    };
    return Quiz;
}());
// Sample questions
var questions = [
    {
        question: "What is the capital of India?",
        choices: ["Mumbai", "Delhi", "Madrid", "Rome"],
        correctAnswer: "Delhi",
    },
    {
        question: "Which is the Fruit among following ?",
        choices: ["Apple", "Cabbage", "Spinach", "Brocoli"],
        correctAnswer: "Apple",
    },
    {
        question: "What is 3 * 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "6",
    },
];
var quiz = new Quiz(questions);
var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var nextButton = document.getElementById("next-btn");
var scoreElement = document.getElementById("score");
function renderQuestion() {
    var currentQuestion = quiz.getCurrentQuestion();
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(function (choice) {
        var button = document.createElement("button");
        button.textContent = choice;
        button.className = "choice-button";
        button.onclick = function () { return handleAnswer(choice); };
        choicesElement.appendChild(button);
    });
    nextButton.disabled = true;
}
function handleAnswer(choice) {
    var isCorrect = quiz.checkAnswer(choice);
    alert(isCorrect ? "Correct!" : "Wrong!");
    nextButton.disabled = false;
}
nextButton.addEventListener("click", function () {
    if (quiz.nextQuestion()) {
        renderQuestion();
    }
    else {
        questionElement.textContent = "Quiz Over!";
        choicesElement.innerHTML = "";
        scoreElement.textContent = "Final Score: ".concat(quiz.getScore(), " / ").concat(questions.length);
        nextButton.disabled = true;
    }
    scoreElement.textContent = "Score: ".concat(quiz.getScore());
});
// Initialize the quiz
renderQuestion();
