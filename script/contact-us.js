// Add event listener for form submission
document.querySelector("form").addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get form input values
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  // Validate form input
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill out all fields.");
    return;
  }

  // Send form data to server (replace with your own API endpoint)
  fetch("https://example.com/api/contact", {
    method: "POST",
    body: JSON.stringify({ name, email, message }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert("Thank you for your message!");
      document.querySelector("form").reset();
    })
    .catch((error) => {
      console.error("There was an error submitting the form:", error);
      alert(
        "There was an error submitting your message. Please try again later."
      );
    });
});
