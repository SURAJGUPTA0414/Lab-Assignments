import React, { useState } from 'react';

export default function Child1({ handleCount }) {
  const [countChild1, setCountChild1] = useState(0);

  function countAdd() {
    const newCount = countChild1 + 1;
    setCountChild1(newCount);
    handleCount(1); // Send the increment value (1) to the parent
  }

  return (
    <div style={{ backgroundColor: 'yellow' }}>
      <button onClick={countAdd}>child1+</button>
    </div>
  );
}
