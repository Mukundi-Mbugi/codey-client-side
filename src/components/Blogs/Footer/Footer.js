import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer1">
      <footer className="footer">
        <p id="copyright">&copy; 2020 Codey:All rights reserved</p>
        <div className="values">
          <ul>
            <li>Terms of service</li>
            <li>Privacy</li>
            <li>Secure</li>
            <li>Transparent</li>
          </ul>
        </div>
        <div className="footer-icons">
          <i className="medium material-icons">call</i>
          <i className="medium material-icons">whatsapp</i>
          <i className="medium material-icons">facebook</i>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
