import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

function DrawingCanvas({ color, onDraw }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
      width: 600,
      height: 400,
      backgroundColor: '#fff'
    });
    canvas.freeDrawingBrush.color = color;
    canvas.freeDrawingBrush.width = 3;

    canvas.on('path:created', () => {
      onDraw && onDraw(canvas.toJSON());
    });

    return () => canvas.dispose();
  }, [color]);

  return <canvas ref={canvasRef} width={600} height={400} />;
}

export default DrawingCanvas;