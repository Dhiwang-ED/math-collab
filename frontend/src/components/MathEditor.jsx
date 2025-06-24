import React, { useRef, useEffect } from "react";

function MathEditor({ value, onChange, color }) {
  const ref = useRef();

  useEffect(() => {
    // Mathlive global sudah dimuat dari index.html
    if (window.MathfieldElement) {
      const el = ref.current;
      if (el) {
        el.setOptions({
          virtualKeyboardMode: "onfocus",
          onContentDidChange: (mf) => {
            onChange(mf.getValue("latex"));
          },
          styles: { color }
        });
        el.setValue(value || "", { suppressChangeNotifications: true });
      }
    }
  }, [color]);

  return (
    <math-field
      ref={ref}
      style={{ fontSize: 24, color: color, border: "1px solid #aaa", padding: 8, minHeight: 40 }}
    />
  );
}

export default MathEditor;