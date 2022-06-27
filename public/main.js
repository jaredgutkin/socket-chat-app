const form = document.querySelector("form");
const input = document.querySelector(".input");
const messages = document.querySelector(".messages");
const username = prompt("Please enter a username: ", "");
const socket = io()

form.addEventListener('submit', (event)=>{
    event.preventDefault()

    addMessage(username + ': ' + input.value)

    socket.emit('chat_message', {
        message: input.value
    })

    input.value = ""
    return false
}, false)

socket.on('chat_message', (data)=>{
    addMessage(data.username + ': ' + data.message)
})

socket.on('user_join', (data)=>{
    addMessage(data + ' just joined the chat')
})

socket.on('user_leave', (data)=>{
    addMessage(data + ' has left the chat')
})

addMessage(`you have joined thre chat as ${username}.`)
socket.emit('user_join', username)

function addMessage(message) {
    const li = document.createElement('li')
    li.innerHTML = message
    messages.appendChild(li)
    window.scrollTo(0, document.body.scrollHeight)
}