import React, { useMemo, useState } from 'react'

function useMemodemo() {
    const [x,setX] = useState(0);
    const[y,setY] = useState(100);

    const multiplication = useMemo(
        function multiply(){
            console.log('inside memo');
            return(x*20);
            
        }
    );
;  return (
    <div>
        <h1>use memeo</h1>

        <h1>value of x is :{x}</h1>
        <h1>multiply value is : {multiplication}</h1>
        <button onClick={() => setX(x+1)}> Add</button>

        <h1>Vaue of y is :{y}</h1>
        <button onClick={() => setY(y-1)}>Subtract</button>
      
    </div>
  )
}

export default useMemodemo
