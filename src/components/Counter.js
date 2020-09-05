import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return { count: prevState.count++ };
    });
  };

  render() {
    // render is the prop name
    return <div>{this.props.render(this.state.count, this.increment)}</div>;
    // we can also use children
    // return <div>{this.props.children(this.state.count, this.increment)}</div>;
  }
}

export default Counter;
