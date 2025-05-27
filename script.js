
(function () {
  emailjs.init("uFnTtuTtZNDODOr1B");
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guess-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_cvizm6r", "template_ljo2i36", this)
        .then(() => {
          alert("Thanks for your guess! We've sent you a confirmation email.");
          this.reset();
        }, (error) => {
          alert("Something went wrong. Please try again later.");
          console.error(error);
        });
    });
  }
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
