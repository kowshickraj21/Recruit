const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

io.on("connection", (socket) => {
  console.log("A client connected",socket.id);
  
  // Send a message to the client when it connects
  // socket.emit('chat-message', 'Welcome to the chat!');
  
  // Handle messages from the client
  socket.on('client-message', (sender,message) => {
    console.log('Message from client:', {'sender':sender,'message':message});
    socket.broadcast.emit('chat-message',{'sender':sender,'message':message});
  });
  
  // Handle disconnection
  socket.on('disconnect', () => {
    console.log("A client disconnected");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
