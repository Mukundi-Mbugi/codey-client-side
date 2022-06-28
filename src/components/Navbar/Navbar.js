import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
          <nav>
    <div className="nav-wrapper white">
      <div className='nav-bar' >
      <a href="#" className="brand-logo"  className='teal-text'>Logo</a>
      <ul className="right hide-on-med-and-down white">
        <li><a href="sass.html"  className='teal-text'>Home</a></li>
        <li><a href="badges.html"  className='teal-text'>About</a></li>
        <li><a href="collapsible.html"  className='teal-text'>Blogs</a></li>
      </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar