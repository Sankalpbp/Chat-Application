'use strict'

const socket = io();

socket.on('message', (message) => {
    console.log(message);
});

document.querySelector('#messageForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const message = document.querySelector('input').value;

    socket.emit('sendMessage', message);
});