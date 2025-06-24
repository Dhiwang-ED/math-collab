const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', socket => {
  socket.on('join', room => socket.join(room));
  socket.on('math-change', ({ room, latex }) => {
    socket.to(room).emit('math-update', latex);
  });
  socket.on('canvas-change', ({ room, data }) => {
    socket.to(room).emit('canvas-update', data);
  });
});

server.listen(5000, () => console.log('Server started on 5000'));