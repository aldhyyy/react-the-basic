import React from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    constructor() {
      super();

      this.state = {
        count: 0,
      };
    }

    increment = () => {
      this.setState((prevState) => ({ count: prevState.count++ }));
    };

    render() {
      const { count } = this.state;

      return (
        <WrappedComponent
          count={count}
          increment={this.increment}
          {...this.props} //pass down the rest of props to be able to use on wrapped component
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
