import React, { Component } from "react";

class Section extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="section-body">
            <h1 className="section-heading">{this.props.heading}</h1>
            <div className="section-content">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
