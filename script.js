function checkQuiz() {
  let score = 0;

  if (document.querySelector('input[name="q1"]:checked')?.value === "a") score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "a") score++;
  if (document.querySelector('input[name="q3"]:checked')?.value === "b") score++;
  if (document.querySelector('input[name="q4"]:checked')?.value === "a") score++;
  if (document.querySelector('input[name="q5"]:checked')?.value === "a") score++;

  document.getElementById("result").textContent =
    "Your score is " + score + " / 5";

  return false;
}
