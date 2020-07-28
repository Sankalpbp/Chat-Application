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

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your Browser.');
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        };

        socket.emit('sendLocation', location);
    });
});
