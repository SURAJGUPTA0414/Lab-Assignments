import React, { useState } from 'react'

function Inputshow() {
    const [text,SetText] = useState('');
  return (
    <div>
        <h1>inputshow</h1>
        <input type="text"  onChange={(e) => {SetText(e.target.value)}}/>
        <p>show typed text:{text}</p>
      
    </div>
  )
}

export default Inputshow
