const form = document.querySelector("form");
const input = document.querySelector(".input");
const messages = document.querySelector(".messages");
const username = prompt("Please enter a username: ", "");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    addMessage(username + ": " + input.value);

    input.value = "";
    return false;
}, false);

addMessage("You have joined the chat as '" + username  + "'.");

function addMessage(message) {
    const li = document.createElement("li");
    li.innerHTML = message;
    messages.appendChild(li);
    window.scrollTo(0, document.body.scrollHeight);
}