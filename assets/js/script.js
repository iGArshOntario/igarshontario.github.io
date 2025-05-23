// Show form when "Guess" button is clicked
document.getElementById("guessBtn").addEventListener("click", () => {
  document.getElementById("guessSection").classList.remove("hidden");
  document.getElementById("guessBtn").style.display = "none";
});

// Fake submit behavior for now
const form = document.getElementById("guessForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  msg.textContent = "Thank you for your guess! We’ll reach out if you're right.";
  form.reset();

  setTimeout(() => {
    msg.textContent = "";
  }, 4000);
});
