import React, { useRef, useEffect } from 'react';

function MathEditor({ value, onChange, color }) {
  const ref = useRef();

  useEffect(() => {
    import('mathlive').then(MathLive => {
      const el = ref.current;
      el.setOptions({
        virtualKeyboardMode: 'onfocus',
        onContentDidChange: (mf) => {
          onChange(mf.getValue('latex'));
        },
        styles: { color }
      });
      el.setValue(value || '', { suppressChangeNotifications: true });
    });
  }, [color]);

  return (
    <math-field ref={ref} style={{ fontSize: 24, color }} />
  );
}

export default MathEditor;