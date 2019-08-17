import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-title">
          <h1>Quarks TechnoSoft</h1>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/giphy">Giphy</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
