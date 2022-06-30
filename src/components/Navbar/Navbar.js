import React from "react";
import "./Navbar.css";
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <ul className="navbar-list">
          <li>logo</li>
          <div className="nav-header">
            <li>
              <NavLink to="/"><button className="home-btn">Home</button></NavLink>
                
             
            </li>
            <li>
              <NavLink to="/Login"><button className="login-btn">Login</button></NavLink>
            </li>
            <li>
              <NavLink to="/"><button className="logout-btn">logout</button></NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
