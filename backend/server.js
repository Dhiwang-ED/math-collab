const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express(); // deklarasi di sini!
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

io.on('connection', socket => {
  socket.on('join', room => socket.join(room));
  socket.on('math-change', ({ room, latex }) => {
    socket.to(room).emit('math-update', latex);
  });
  socket.on('canvas-change', ({ room, data }) => {
    socket.to(room).emit('canvas-update', data);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on ${PORT}`));