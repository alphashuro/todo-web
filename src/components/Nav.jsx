import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="header">
      <div className="home-menu pure-menu pure-menu-horizontal">
        <a href="/" className="pure-menu-heading pure-menu-link">
          todo
        </a>
        
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <Link to="/login" className="pure-menu-link">
              Login
            </Link>
          </li>
          <li className="pure-menu-item">
            <Link to="/signup" className="pure-menu-link">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
