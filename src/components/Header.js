import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="header-body">
            <span>PeaceRelay</span>
            <ul className="navigation">
              <li>Documentation</li>
              <li>Minter</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
