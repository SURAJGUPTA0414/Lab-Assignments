import React from 'react';
import { useMyContext } from '../MyProvider/MyProvider2';

function Home() {
  const { theme } = useMyContext();

  const style = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
    padding: '20px',
    margin: '10px 0'
  };

  return <div style={style}>This is the Home component.</div>;
}

export default Home;