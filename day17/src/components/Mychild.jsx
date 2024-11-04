import React from 'react'

function MyChild({y}) {
    console.log('child');
    
  return (
    <div>
       <h1>value of y child is {y}</h1>
    </div>
  )
}

export default React.memo(MyChild)
