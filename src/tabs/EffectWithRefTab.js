import { useEffect, useRef, useState } from 'react';

function EffectWithRefTab() {
  const [count, setCount] = useState(0);
  const isCurrent = useRef(true);
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  const setCountWithTimeoutSafely = () => {
    setTimeout(() => {
      if (!isCurrent.current) return;
      setCount((currentCount) => currentCount + 1);
    }, 2000);
  };

  return (
    <div className="Tab">
      <div>{count}</div>
      <button onClick={() => setCountWithTimeoutSafely()}>
        Increment with timeout safely
      </button>
    </div>
  );
}

export default EffectWithRefTab;
