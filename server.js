const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express(); // <-- Inisialisasi app di sini!
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Middleware
app.use(express.json());

// Endpoint test
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

// Gunakan PORT dari environment variable untuk Render!
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on ${PORT}`));
