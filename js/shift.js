const textBox = document.getElementById("textBox");
const nextBtn = document.getElementById("nextBtn");
const msg = document.getElementById("msg");
const hasCapital = /[A-Z]/;
const hasSpecial = /[^a-zA-Z0-9 ]/;
textBox.addEventListener("input", () => {
  const value = textBox.value;
  const capitalFound = hasCapital.test(value);
  const specialFound = hasSpecial.test(value);
  if (capitalFound && specialFound) {
    nextBtn.style.display = "block";
    msg.textContent = "Good job!";
  } else {
    nextBtn.style.display = "none";
    msg.textContent = "You need at least 1 capital letter AND 1 special character.";
  }
});
function goNext() {
  window.location.href = "shortcuts.html";
}