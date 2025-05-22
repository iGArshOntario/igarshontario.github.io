
document.getElementById('guess-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById("form-response").innerText = "Thanks! If your guess is correct, you'll hear from us. Stay tuned.";
});
