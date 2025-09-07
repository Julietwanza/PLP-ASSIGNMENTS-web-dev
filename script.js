// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("student-name");
  const emailInput = document.getElementById("student-email");
  const gradeSelect = document.getElementById("grade");
  const messageInput = document.getElementById("message");

  // Character counter for message
  const counter = document.createElement("small");
  counter.style.display = "block";
  counter.style.marginTop = "5px";
  counter.textContent = "0 / 300 characters";
  messageInput.after(counter);

  messageInput.addEventListener("input", () => {
    counter.textContent = `${messageInput.value.length} / 300 characters`;
    if (messageInput.value.length > 300) {
      counter.style.color = "red";
    } else {
      counter.style.color = "black";
    }
  });

  // Custom form validation
  form.addEventListener("submit", (e) => {
    let errors = [];

    if (nameInput.value.trim().length < 2) {
      errors.push("Full name must be at least 2 characters long.");
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      errors.push("Please enter a valid email address.");
    }

    if (gradeSelect.value === "") {
      errors.push("Please select your grade level.");
    }

    if (messageInput.value.trim().length < 10) {
      errors.push("Message must be at least 10 characters long.");
    } else if (messageInput.value.trim().length > 300) {
      errors.push("Message cannot exceed 300 characters.");
    }

    if (errors.length > 0) {
      e.preventDefault();
      alert(errors.join("\n"));
    } else {
      alert("✅ Thank you for your feedback!");
    }
  });

  // Smooth scroll
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
