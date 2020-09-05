import React, { Component } from "react";
import ReactDOM from "react-dom";

class PortalExample extends Component {
  render() {
    //   This will mount component in portal root
    return ReactDOM.createPortal(
      <div>
        <h1>Portal text</h1>
      </div>,
      document.getElementById("portal-root")
    );
  }
}

export default PortalExample;
