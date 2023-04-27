// Hover mouse di footer
const links = document.querySelectorAll("a[data-href]");

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.setAttribute("href", link.getAttribute("data-href"));
  });

  link.addEventListener("mouseout", () => {
    link.removeAttribute("href");
  });
});

// Section kirim pesan
const sendButton = document.getElementById("btnSend");

sendButton.addEventListener("click", () => {
  const nameInput = document.getElementById("inputName").value;
  const emailInput = document.getElementById("inputEmail").value;
  const numberInput = document.getElementById("inputNumber").value;
  const messageInput = document.getElementById("inputMessage").value;

  if (
    nameInput.trim() === "" ||
    emailInput.trim() === "" ||
    numberInput.trim() === "" ||
    messageInput.trim() === ""
  ) {
    alert("Please fill in all fields");
  } else {
    alert("Message sent!");
    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputNumber").value = "";
    document.getElementById("inputMessage").value = "";
  }
});

const subscribe = document.getElementById("btnSubs");

subscribe.addEventListener("click", () => {
  const subsEmail = document.getElementById("emailSubs").value;

  if (subsEmail.trim() === "") {
    alert("Please fill in all fields");
  } else {
    alert("Thanks For Subscribe!");
    document.getElementById("emailSubs").value = "";
  }
});
