import React, { Component } from "react";

const github = require("../images/github.svg");

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-body">
            <img className="footer-icon" src={github} />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
