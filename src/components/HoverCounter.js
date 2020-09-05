import React from "react";
import withCounter from "./HOC/withCounter";

const HoverCounter = (props) => {
  const { count, increment, name } = props;
  return (
    <div>
      <h2 onMouseOver={increment}>
        Hover {count} {name}
      </h2>
    </div>
  );
};

export default withCounter(HoverCounter);
