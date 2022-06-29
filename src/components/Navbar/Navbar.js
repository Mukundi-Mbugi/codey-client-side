import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <ul className="navbar-list">
          <li>logo</li>
          
          <li><button className='logout-btn'>logout</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar