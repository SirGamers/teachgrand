const quiz = [
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5"],
    correct: 1
  },
  {
    question: "Capital of France?",
    answers: ["Berlin", "Paris", "Rome"],
    correct: 1
  }
];

let current = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next");
const scoreEl = document.getElementById("score");

nextBtn.style.display = "none"; // hide at start

function loadQuestion() {
  answered = false;
  nextBtn.style.display = "none";

  if (current >= quiz.length) {
    questionEl.textContent = "Finished!";
    answersEl.innerHTML = "";
    scoreEl.textContent = `Score: ${score}/${quiz.length}`;
    return;
  }

  const q = quiz[current];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;

    btn.onclick = () => {
      if (answered) return; // prevent double click
      answered = true;

      if (index === q.correct) {
        score++;
        btn.style.backgroundColor = "green";
      } else {
        btn.style.backgroundColor = "red";
      }

      nextBtn.style.display = "block"; // show next button
    };

    answersEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  current++;
  loadQuestion();
};

loadQuestion();
