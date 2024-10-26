import React, { useRef } from 'react'

export default function UseRefDemo() {
    const inputRef = useRef(null);
    const handleInput = (e) =>
{
    e.preventDefault();
    inputRef.current.value = "suraj";
    inputRef.current.style.color = "red";
    inputRef.current.style.backgroundColor = "black"
}    
  return (
    <div>
        <h1>UseRefDemo</h1>
        <form>
            <input type='text' ref={inputRef} placeholder='enter name' />
            <button onClick={handleInput}>submit</button>
        </form>
      
    </div>
  )
}
