const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");

sendBtn.addEventListener("click", sendMessage);

function sendMessage() {
  const text = input.value.trim();

  if (text === "") return;

  addMessage(text, "sent");

  input.value = "";

  setTimeout(() => {
    addMessage("Message received: " + text, "received");
  }, 1000);
}

function addMessage(text, type) {
  const div = document.createElement("div");

  div.classList.add("message", type);
  div.textContent = text;

  messages.appendChild(div);

  messages.scrollTop = messages.scrollHeight;
}
