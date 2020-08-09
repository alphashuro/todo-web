import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="header">
      <div className="home-menu pure-menu pure-menu-horizontal">
        <a href="/" class="pure-menu-heading pure-menu-link">
          todo
        </a>
        
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <Link to="/login" class="pure-menu-link">
              Login
            </Link>
          </li>
          <li class="pure-menu-item">
            <Link to="/signup" class="pure-menu-link">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
