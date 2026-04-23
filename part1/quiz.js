const quiz = [
  {
    question: "What can rightclick do",
    answers: ["3", "4", "5"],
    correct: 1
  },
  {
    question: "Waaaaa",
    answers: ["Berlin", "Paris", "Rome"],
    correct: 1
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = quiz[current];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;

    btn.onclick = () => {
      if (index === q.correct) score++;
      current++;
      loadQuestion();
    };

    answersEl.appendChild(btn);
  });
}

function showScore() {
  questionEl.textContent = "Finished!";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.textContent = `Score: ${score}/${quiz.length}`;
}

function loadNext() {
  if (current < quiz.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

nextBtn.onclick = loadNext;

// start quiz
loadQuestion();