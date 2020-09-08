import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export default class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {/* context value as parameter */}
        {(username) => {
          return <div>Hello {username}</div>;
        }}
      </UserConsumer>
    );
  }
}
