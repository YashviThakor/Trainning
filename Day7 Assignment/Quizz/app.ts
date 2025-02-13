interface Question {
    question: string;
    choices: string[];
    correctAnswer: string;
}

class Quiz {
    private questions: Question[];
    private currentIndex: number = 0;
    private score: number = 0;

    constructor(questions: Question[]) {
        this.questions = questions;
    }

    getCurrentQuestion(): Question {
        return this.questions[this.currentIndex];
    }

    checkAnswer(answer: string): boolean {
        const isCorrect = answer === this.getCurrentQuestion().correctAnswer;
        if (isCorrect) this.score++;
        return isCorrect;
    }

    nextQuestion(): boolean {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            return true;
        }
        return false;
    }

    getScore(): number {
        return this.score;
    }

    isQuizOver(): boolean {
        return this.currentIndex >= this.questions.length - 1;
    }
}

// Sample questions
const questions: Question[] = [
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

const quiz = new Quiz(questions);
const questionElement = document.getElementById("question")!;
const choicesElement = document.getElementById("choices")!;
const nextButton = document.getElementById("next-btn") as HTMLButtonElement;
const scoreElement = document.getElementById("score")!;
function renderQuestion() {
    const currentQuestion = quiz.getCurrentQuestion();
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.className = "choice-button";
        button.onclick = () => handleAnswer(choice);
        choicesElement.appendChild(button);
    });
    nextButton.disabled = true;
}
function handleAnswer(choice: string) {
    const isCorrect = quiz.checkAnswer(choice);
    alert(isCorrect ? "Correct!" : "Wrong!");
    nextButton.disabled = false;
}
nextButton.addEventListener("click", () => {
    if (quiz.nextQuestion()) {
        renderQuestion();
    } else {
        questionElement.textContent = "Quiz Over!";
        choicesElement.innerHTML = "";
        scoreElement.textContent = `Final Score: ${quiz.getScore()} / ${questions.length}`;
        nextButton.disabled = true;
    }
    scoreElement.textContent = `Score: ${quiz.getScore()}`;
});
// Initialize the quiz
renderQuestion();
