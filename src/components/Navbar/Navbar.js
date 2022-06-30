import React from "react";
import "./Navbar.css";
import {NavLink} from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../Fireconfig";
import logo from "../../blogger.svg"

function Navbar() {
  
  function handleLogout(){
    signOut();
    auth.signOut();
  }

  return (
    <div>
      <nav className="nav-bar">
        <ul className="navbar-list">
          <li>
            <div>
            <img src={logo} className="nav-logo" alt="logo"></img>
            </div>
          </li>
          <div className="nav-header">
            <li>
              <NavLink to="/"><button className="home-btn">Home</button></NavLink>

            </li>
            <li>
              <NavLink to="/Login"><button className="login-btn">Login</button></NavLink>
            </li>
            <li>
              <NavLink to="/"><button className="logout-btn" onClick={handleLogout} >logout</button></NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
