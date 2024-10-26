import React from 'react'
import { NavLink } from 'react-router-dom'
import HoverComponent from './HoverComponent'

export default function Navbar() {
  return (
    <div>
         <NavLink to='/Home'>
        <button>
            Home Page
        </button>

        </NavLink>
        <NavLink to='/about'>
        <button>
            About Page
        </button>

        </NavLink>
        <NavLink to='/Contact'>
        <button>
            Contact Page
        </button>

        </NavLink>

        <NavLink to='/Category'>
        <button>
            Category Page
        </button>

        </NavLink>

        <NavLink to='/hover/:colorname'>Hover Page</NavLink>
       <HoverComponent />
        
      
    </div>
  )
}
