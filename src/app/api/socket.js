import { Server } from 'socket.io';

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    console.log('*First use, starting Socket.IO');
    const io = new Server(res.socket.server);

    io.on('connection', (socket) => {
      console.log(`Socket ${socket.id} connected.`);

      socket.on('client-message', (message) => {
        console.log(message);
        io.emit('chat-message', message);
      });

      socket.on('disconnect', () => {
        console.log(`Socket ${socket.id} disconnected.`);
      });
    });

    res.socket.server.io = io;
  } else {
    console.log('Socket.IO already running');
  }
  res.end();
};

export default ioHandler;
