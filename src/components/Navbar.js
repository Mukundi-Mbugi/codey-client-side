import React from 'react'
import '../App.css'

function Navbar() {
  return (
    <div>
          <nav>
    <div class="nav-wrapper white">
      <div className='nav-bar' >
      <a href="#" class="brand-logo"  className='teal-text'>Logo</a>
      <ul class="right hide-on-med-and-down white">
        <li><a href="sass.html"  className='teal-text'>Sass</a></li>
        <li><a href="badges.html"  className='teal-text'>Components</a></li>
        <li><a href="collapsible.html"  className='teal-text'>JavaScript</a></li>
      </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar