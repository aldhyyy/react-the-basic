import React from "react";
import withCounter from "./HOC/withCounter";

const ClickCounter = (props) => {
  const { count, increment } = props;
  return (
    <div>
      <button onClick={increment}>Click {count}</button>
    </div>
  );
};

export default withCounter(ClickCounter);
