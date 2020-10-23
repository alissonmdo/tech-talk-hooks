import { useState } from 'react';

const expensiveInitialState = () => 0;

function StateTab() {
  const [count, setCount] = useState(() => expensiveInitialState());

  const setCountWithTimeout = (count) => {
    setTimeout(() => {
      setCount(count);
    }, 2000);
  };

  const setCountWithTimeoutSafely = () => {
    setTimeout(() => {
      setCount((currentCount) => currentCount + 1);
    }, 2000);
  };

  return (
    <div className="StateTab">
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCountWithTimeout(count + 1)}>
        Increment with timeout
      </button>
      <button onClick={() => setCountWithTimeoutSafely()}>
        Increment with timeout safely
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default StateTab;
