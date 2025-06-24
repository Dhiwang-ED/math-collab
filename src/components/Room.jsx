import React, { useState } from 'react';
import io from 'socket.io-client';
import MathEditor from './MathEditor';
import DrawingCanvas from './DrawingCanvas';

const socket = io('http://localhost:5000'); // Ganti sesuai backend

function Room({ roomId }) {
  const [latex, setLatex] = useState('');
  const [color, setColor] = useState('#000000');
  const [canvasData, setCanvasData] = useState(null);

  // Realtime sync (emit & listen, tambahkan useEffect)

  return (
    <div>
      <h2>Room: {roomId}</h2>
      <label>
        Warna:
        <input type="color" value={color} onChange={e => setColor(e.target.value)} />
      </label>
      <div style={{ display: 'flex', gap: 32 }}>
        <div>
          <h3>Editor Matematika</h3>
          <MathEditor value={latex} onChange={setLatex} color={color} />
        </div>
        <div>
          <h3>Kanvas Gambar</h3>
          <DrawingCanvas color={color} onDraw={setCanvasData} />
        </div>
      </div>
      {/* Tambahkan fitur sync data ke socket */}
    </div>
  );
}

export default Room;