import React from 'react';
import { useMyContext } from '../MyProvider/MyProvider2';

function DisplayData() {
  const { message } = useMyContext();

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

export default DisplayData;