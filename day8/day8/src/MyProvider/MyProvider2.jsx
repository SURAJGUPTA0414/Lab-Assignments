import React, { useState, useContext } from 'react';


const MyContext = React.createContext();

// MyProvider to provide message, theme, and their updaters
function MyProvider2({ children }) {
  const [message, setMessage] = useState('Hello World');
  const [theme, setTheme] = useState('light'); // Light theme as default

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <MyContext.Provider value={{ message, setMessage, theme, toggleTheme }}>
      {children}
    </MyContext.Provider>
  );
}

// Custom hook to use context
export const useMyContext = () => {
  return useContext(MyContext);
};

export default MyProvider2;