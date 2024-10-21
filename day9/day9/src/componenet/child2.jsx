import React, { useState } from 'react';

export default function Child2({ handleCount }) {
  const [countChild2, setCountChild2] = useState(0);

  function countAdd() {
    const newCount = countChild2 + 1;
    setCountChild2(newCount);
    handleCount(1); // Send the increment value (1) to the parent
  }

  return (
    <div style={{ backgroundColor: 'yellow' }}>
      <button onClick={countAdd}>child2+</button>
    </div>
  );
}
