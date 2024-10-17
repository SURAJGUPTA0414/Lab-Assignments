import React from 'react'
import { useContext } from 'react'
import { GlobalInfo } from '../App'

function GrandChild() {
    const {appcolor} =useContext(GlobalInfo)
  return (
    <div>
        <h1 style={{color:appcolor}}>
           GrandChild Child
        </h1>
      
    </div>
  )
}

export default GrandChild;
