const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = 3001;

// In-memory message storage for 'testcode' user
const userMessages = {
    "testcode": []
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/testcode', (req, res) => {
    // For simplicity, just send user_page.html.
    // In a real app, you might want to pass the messages to the page to render on the server side.
    res.sendFile(__dirname + '/user_page.html');
});

// New endpoint to serve messages for 'testcode'
app.get('/testcode/messages', (req, res) => {
    res.json(userMessages["testcode"]);
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('chat message', (msg) => {
    // Store the message
    userMessages["testcode"].push(msg);
    io.emit('chat message', msg); // Broadcast message to all connected clients
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
