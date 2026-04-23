const textBox = document.getElementById("textBox");
const nextBtn = document.getElementById("nextBtn");
const msg = document.getElementById("msg");
const requiredText = "Copy and pasting is cool!";
textBox.addEventListener("input", () => {
  const value = textBox.value;
  if (value === requiredText) {
    nextBtn.style.display = "block";
    msg.textContent = "Correct!";
  } else {
    nextBtn.style.display = "none";
    msg.textContent = "Incorrect text.";
  }
});
function goNext() {
  window.location.href = "shift.html";
}