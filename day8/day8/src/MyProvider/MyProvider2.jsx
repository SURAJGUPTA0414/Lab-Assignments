import React, { useState, useContext } from 'react';


const MyContext = React.createContext();


function MyProvider2({ children }) {
  const [data, setdata] = useState('Hello World');
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <MyContext.Provider value={{ data, setdata, theme, toggleTheme }}>
      {children}
    </MyContext.Provider>
  );
}


export const useMyContext = () => {
  return useContext(MyContext);
};

export default MyProvider2;