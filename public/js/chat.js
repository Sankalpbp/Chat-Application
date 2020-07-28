'use strict'

const socket = io();

socket.on('message', (message) => {
    console.log(message);
});

document.querySelector('#messageForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const message = event.target.elements.message.value;

    socket.emit('sendMessage', message);
});