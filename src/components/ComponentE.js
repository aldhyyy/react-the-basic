import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

export default class ComponentE extends Component {
  render() {
    return (
      <div>
        Context value on component E {this.context}
        <ComponentF />
      </div>
    );
  }
}
// other way to consume the context value
ComponentE.contextType = UserContext;
