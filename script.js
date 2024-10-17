document.addEventListener("DOMContentLoaded", function () {
    // Select form and feedback division
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Form submission event listener
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting

        // Retrieve and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize validation status and messages array
        let isValid = true;
        let messages = [];

        // Username validation: must be at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters.");
        }

        // Email validation: must contain "@" and "."
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must be a valid format with '@' and '.'.");
        }

        // Password validation: must be at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback
        feedbackDiv.style.display = "block"; // Make the feedbackDiv visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green for success
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); // Join messages with line breaks
            feedbackDiv.style.color = "#dc3545"; // Red for errors
        }
    });
});
