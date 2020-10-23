import React, { useState, useRef, useLayoutEffect } from 'react';

const LayoutEffectWithRefTab = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef();
  const hello = useRef(() => console.log('hello'));
  const [rect, setRect] = useState({});
  const divRef = useRef();

  useLayoutEffect(() => {
    setRect(divRef.current.getBoundingClientRect());
  }, [value]);

  return (
    <div>
      <div>
        <a href="https://google.com" ref={divRef}>
          {value}
        </a>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <button onClick={() => hello.current()}>Hello</button>
      <input
        ref={inputRef}
        name="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus
      </button>
    </div>
  );
};

export default LayoutEffectWithRefTab;
