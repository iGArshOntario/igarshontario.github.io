// Toggle Theme
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Optional: Dummy form feedback
const form = document.getElementById("guessForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for your guess! We'll email you if you're right.");
  form.reset();
});
