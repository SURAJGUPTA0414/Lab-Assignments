import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Category() {
  return (
    <div>
        <NavLink to="/category/Kids">
        <button>
            Load kid page
        </button>

        </NavLink>

        <NavLink to="/category/mens">
        men page

        </NavLink>
        <h1>This is a category page</h1>
        <Outlet />
      
    </div>
  )
}
