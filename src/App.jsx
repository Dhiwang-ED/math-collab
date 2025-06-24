import React, { useState } from 'react';
import Room from './components/Room';

function App() {
  const [roomId, setRoomId] = useState('kelas-matematika');

  return (
    <div>
      <h1>Math Collab</h1>
      <Room roomId={roomId} />
    </div>
  );
}

export default App;