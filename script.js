(function () {
  emailjs.init("uFnTtuTtZNDODOr1B"); // Replace with your actual public key
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guess-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Combine all selected checkbox guesses into one string
      const checkboxes = form.querySelectorAll("input[name='guess']:checked");
      const guesses = Array.from(checkboxes).map(cb => cb.value).join(", ");
      document.getElementById("guess_combined").value = guesses;

      // Send email via EmailJS
      emailjs.sendForm("service_dkjavmo", "template_ljo2i36", this)
        .then(() => {
          alert("Thanks for your guess! We've sent you a confirmation email.");
          this.reset();
        }, (error) => {
          alert("Something went wrong. Please try again later.");
          console.error("EmailJS error:", error);
        });
    });
  }

  // Load public comments
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
  }

  // Load public comments
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
