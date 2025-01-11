// ColorUpdater.jsx (React)
import { useState, useEffect } from 'react';

function ColorUpdater({ amp1, amp7, amp21 }) {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const red1 = Math.round(amp1 * 255);
    const red7 = Math.round(amp7 * 255);
    const red21 = Math.round(amp21 * 255);

    setStyles({
      background: `linear-gradient(to bottom, rgb(${red1}, 0, 0), rgb(${red7}, 0, 0), rgb(${red21}, 0, 0))`,
    });
  }, [amp1, amp7, amp21]);

  return <div className="audio-processor" style={styles}></div>;
}

export default ColorUpdater;