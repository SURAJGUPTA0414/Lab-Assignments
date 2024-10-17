import React from 'react';
import { useMyContext } from '../MyProvider/MyProvider2';

function UpdateData() {
  const { setMessage } = useMyContext();

  const updateMessage = () => {
    setMessage('Data updated');
  };

  return (
    <button onClick={updateMessage}>
      Update Message
    </button>
  );
}

export default UpdateData;