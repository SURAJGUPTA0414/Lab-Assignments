import React from 'react'
import { useContext } from 'react'
import { GlobalInfo } from '../App'

function OtherChild() {
    const {appcolor} =useContext(GlobalInfo)
  return (
    <div>
        <h1 style={{color:appcolor}}>
            OtherChild
        </h1>
      
    </div>
  )
}

export default OtherChild
