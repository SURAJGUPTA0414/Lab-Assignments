import React, { useEffect, useState } from 'react'

function LFCE() {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);

    useEffect(() => {
        console.log(count);
        console.log('count updated');
        
    },[]);

    useEffect(() => {
        console.log(count2);
        console.log('count updated2');
        
    },[count2]);

  return (
    <div>
        <p>{count}</p>
        <p>{count2}</p>
        <button onClick={() => {setCount(count + 1)}}>count to update</button>
        <button onClick={() => {setCount2(count2 + 1)}}>count to update2</button>
      
    </div>
  )
}

export default LFCE
