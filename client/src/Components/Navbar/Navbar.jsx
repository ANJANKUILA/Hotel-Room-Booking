import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
      <Link to="/">
        <span className='logo' style={{color:"white",textDecoration:"none",cursor:"pointer"}}>Home Page</span>
        </Link>
        <div className='navItems'>
            <button className='navButton'>Register</button>
            <button className='navButton'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
