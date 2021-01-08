// elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

// quiz questions
let questions = [
    {
        question: "What color does cheese have?",
        choiceA: "Yellow",
        choiceB: "Blue",
        choiceC: "Red",
        correct: "A"
    }, {
        question: "Who painted Mona Lisa?",
        choiceA: "Munch",
        choiceB: "Piccaso",
        choiceC: "Push Wagner",
        correct: "B"
    }, {
        question: "What does JS stand for?",
        choiceA: "Python",
        choiceB: "TypeScript",
        choiceC: "JavaScript",
        correct: "C"
    }
];

// variables
let lastQuestion = questions.length;
let runningQuestion = 0;
let count = 0;
let score = 0;



start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";

    renderQuestion();
    quiz.style.display = "block";
}


// render questions
function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

// check answer
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        answerIsCorrect();
    } else {
        answerIsWrong();
    }

    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }
}
// alerts right or wrong
function answerIsCorrect() {
    alert("Correct answer");
}

function answerIsWrong() {
    alert("Wrong answer");
}



