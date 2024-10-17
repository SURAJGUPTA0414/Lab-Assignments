import React from 'react'
import { useContext } from 'react'
import { GlobalInfo } from '../App'

function Child() {
    const {appcolor} =useContext(GlobalInfo)
  return (
    <div>
        <h1 style={{color:appcolor}}>
            Child
        </h1>
      
    </div>
  )
}

export default Child;
