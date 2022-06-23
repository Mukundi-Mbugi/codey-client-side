import React from 'react'
import '../App.css'

function Navbar() {
  return (
    <div className="container container-fluid">
      <div className="row hoverable">
        <p className="z-depth-1">Home</p>
        <i className="small material-icons white-text ">
                      home
                    </i>
      </div>
      <div className="row hoverable">
        <p className="z-depth-1">About</p>
        <i className="small material-icons white-text ">
                      info
                    </i>
      </div>
      <div className="row hoverable">
        <p className="z-depth-1 ">Contact</p>
        <i className="small material-icons white-text ">
                      phone
                    </i>
      </div>
      <div className="row hoverable">
        <p className="z-depth-1 ">Popular</p>
      </div>
    </div>
  )
}

export default Navbar