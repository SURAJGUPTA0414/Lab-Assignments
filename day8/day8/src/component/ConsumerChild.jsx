import React from 'react'
import { useState } from 'react'
import { useMyContext } from '../MyProvider/MyProvider'

function ConsumerChild() {
    const {state, setState} = useMyContext();
  return (
    <div>
        <h1>Consumer child</h1>
        <h2>{state.name}</h2>
        <h2>{state.age}</h2>
        <h2>{state.email}</h2>
      
    </div>
  )
}

export default ConsumerChild
