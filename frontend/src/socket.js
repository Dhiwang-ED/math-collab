import { io } from "socket.io-client";

// Ganti URL di bawah dengan URL backend yang sudah di-deploy di Render:
const BACKEND_URL = "https://math-collab-backend.onrender.com";

export const socket = io(BACKEND_URL, {
  transports: ['websocket'],
});