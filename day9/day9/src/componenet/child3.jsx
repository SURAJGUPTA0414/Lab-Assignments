import React, { useState } from 'react';

export default function Child3({ handleCount }) {
  const [countChild3, setCountChild3] = useState(0);

  function countAdd() {
    const newCount = countChild3 + 1;
    setCountChild3(newCount);
    handleCount(1); // Send the increment value (1) to the parent
  }

  return (
    <div style={{ backgroundColor: 'yellow' }}>
      <button onClick={countAdd}>child3+</button>
    </div>
  );
}
