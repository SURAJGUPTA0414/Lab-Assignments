import React from 'react';
import { useMyContext } from '../MyProvider/MyProvider2';

function DisplayData() {
  const { data } = useMyContext();

  return (
    <div>
      <h2>{data}</h2>
    </div>
  );
}

export default DisplayData;