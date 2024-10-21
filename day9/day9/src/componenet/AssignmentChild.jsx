import React, { useState } from 'react';

export default function ChildComponent() {
  const [count, setCount] = useState(0);

  // Function to increment count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ backgroundColor: 'lightblue', padding: '10px', marginTop: '20px' }}>
      <h3>Child Component</h3>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}
