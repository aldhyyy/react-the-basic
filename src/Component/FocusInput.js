import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {
  constructor() {
    super();

    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    //   Here we access the function inside child component using ref
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus On Click</button>
      </div>
    );
  }
}

export default FocusInput;
