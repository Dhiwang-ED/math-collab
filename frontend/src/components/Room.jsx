import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import MathEditor from "./MathEditor";
import DrawingCanvas from "./DrawingCanvas";

const socket = io("http://localhost:5000");

function Room({ roomId }) {
  const [latex, setLatex] = useState("");
  const [color, setColor] = useState("#000000");
  const [canvasData, setCanvasData] = useState(null);
  const [remoteLatex, setRemoteLatex] = useState("");
  const [remoteCanvas, setRemoteCanvas] = useState(null);

  useEffect(() => {
    socket.emit("join", roomId);

    socket.on("math-update", (newLatex) => {
      setRemoteLatex(newLatex);
    });

    socket.on("canvas-update", (data) => {
      setRemoteCanvas(data);
    });

    return () => {
      socket.off("math-update");
      socket.off("canvas-update");
    };
  }, [roomId]);

  useEffect(() => {
    if (latex !== remoteLatex) {
      socket.emit("math-change", { room: roomId, latex });
    }
    // eslint-disable-next-line
  }, [latex]);

  useEffect(() => {
    if (canvasData !== remoteCanvas) {
      socket.emit("canvas-change", { room: roomId, data: canvasData });
    }
    // eslint-disable-next-line
  }, [canvasData]);

  return (
    <div style={{ margin: "2em" }}>
      <h2>Room: {roomId}</h2>
      <label>
        Warna:{" "}
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      <div style={{ display: "flex", gap: 32, marginTop: 20 }}>
        <div>
          <h3>Editor Matematika</h3>
          <MathEditor value={remoteLatex || latex} onChange={setLatex} color={color} />
        </div>
        <div>
          <h3>Kanvas Gambar</h3>
          <DrawingCanvas color={color} onDraw={setCanvasData} remoteData={remoteCanvas} />
        </div>
      </div>
    </div>
  );
}

export default Room;