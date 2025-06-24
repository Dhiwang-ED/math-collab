import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

function DrawingCanvas({ color, onDraw, remoteData }) {
  const canvasRef = useRef();
  const fabricRef = useRef();

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
      width: 600,
      height: 400,
      backgroundColor: "#fff"
    });
    fabricRef.current = canvas;
    canvas.freeDrawingBrush.color = color;
    canvas.freeDrawingBrush.width = 3;

    canvas.on("path:created", () => {
      onDraw && onDraw(canvas.toJSON());
    });

    return () => canvas.dispose();
  }, []);

  useEffect(() => {
    if (fabricRef.current) {
      fabricRef.current.freeDrawingBrush.color = color;
    }
  }, [color]);

  useEffect(() => {
    if (remoteData && fabricRef.current) {
      fabricRef.current.loadFromJSON(remoteData, fabricRef.current.renderAll.bind(fabricRef.current));
    }
  }, [remoteData]);

  return <canvas ref={canvasRef} width={600} height={400} style={{ border: "1px solid #ccc" }} />;
}

export default DrawingCanvas;