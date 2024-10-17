import React from 'react';
import { useMyContext } from '../MyProvider/MyProvider2';

function ToggleButton() {
  const { toggleTheme, theme } = useMyContext();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default ToggleButton;