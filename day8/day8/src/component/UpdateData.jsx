import React from 'react';
import { useMyContext } from '../MyProvider/MyProvider2';

function UpdateData() {
  const { setdata } = useMyContext();

  const updatedata = () => {
    setdata('updating data');
  };

  return (
    <button onClick={updatedata}>
      Update data
    </button>
  );
}

export default UpdateData;