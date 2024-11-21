const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true
  }
});

// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['my-custom-header'],
//   credentials: true
// }));

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('client-message', (data) => {
    io.emit('chat-message', data);
  });
});

server.listen(5000, () => {
  console.log('listening on *:5000');
});
