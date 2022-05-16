import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='main'>
    <div className="logo">
    <NavLink className='port' to='/'>EV Market</NavLink>
 
    </div>
    
    <ul className='nav'>
        <NavLink className='navlink' to='/'>Home</NavLink>
        <NavLink className='navlink' to='/gallery'>Gallery</NavLink>
        <NavLink className='navlink' to='/prebooking'>Prebooking</NavLink>
        <NavLink className='navlink' to='/signin'>Signin</NavLink>
    </ul>
    </div>
  )
}

export default Navbar