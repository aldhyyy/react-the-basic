import React from "react";
import withCounter from "./HOC/withCounter";

const HoverCounter = (props) => {
  const { count, increment } = props;

  return (
    <div>
      <h2 onMouseOver={increment}>Hover {count}</h2>
    </div>
  );
};

export default withCounter(HoverCounter);
