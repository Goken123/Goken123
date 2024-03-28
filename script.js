function sendMessage() {
  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;
  if (username.trim() !== "" && message.trim() !== "") {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = `${username}: ${message}`;
    document.getElementById("message-container").appendChild(messageDiv);
    document.getElementById("message").value = "";
  } else {
    alert("Please enter both your name and a message.");
  }
}