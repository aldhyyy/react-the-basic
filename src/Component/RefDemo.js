import React, { Component } from "react";

class RefDemo extends Component {
  constructor() {
    super();

    this.inputRef = React.createRef();
    // old style ref, using callback ref
    this.cbRef = null;
    // we parsing the element and attach the ref with elemen
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus();

    // old style ref, using callback ref
    // check first if not null
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        {/* Old style using ref callback */}
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefDemo;
