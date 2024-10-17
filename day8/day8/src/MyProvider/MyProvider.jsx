import React from 'react'
import { useContext } from 'react';

const MyContext = React.createContext();

function MyProvider({children}) {

    let person = {
        name: 'suraj',
        age:30,
        email:'skg@abc.com'
    }
    const [state,setState] = React.useState(person);

  return (
    <div>
        <MyContext.Provider value={{state,setState}}>
            {children}

        </MyContext.Provider>
      
    </div>
  )
}

export const useMyContext = () => {
    return useContext(MyContext);
}

export default MyProvider
