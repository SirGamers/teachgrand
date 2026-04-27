const answers = [0, 1, 0, 0, 0];
function submitQuiz() {
  let score = 0;
  for (let i = 0; i < answers.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (!selected) {
      alert("Answer all questions!");
      return;
    }
    if (parseInt(selected.value) === answers[i]) {
      score++;
    }
  }
  document.getElementById("result").textContent =
    `Score: ${score}/${answers.length}`;
  document.getElementById("nextPage").style.display = "block";
}
function goToNextPage() {
  window.location.href = "../part2/wip.html";
}
