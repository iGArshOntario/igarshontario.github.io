
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guess-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(() => {
        alert("Submitted successfully! We’ll email you if you're right.");
        this.reset();
      }, (error) => {
        alert("Error submitting. Try again later.");
        console.error(error);
      });
    });
  }

  // Load comments
  fetch("comments.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("comment-list");
      if (container && data.comments) {
        data.comments.forEach(comment => {
          const p = document.createElement("p");
          p.textContent = "• " + comment;
          container.appendChild(p);
        });
      }
    });
});
