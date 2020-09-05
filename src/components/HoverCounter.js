import React from "react";

const HoverCounter = (props) => {
  const { count, increment } = props;

  return (
    <div>
      <h2 onMouseOver={increment}>Hover {count}</h2>
    </div>
  );
};

export default HoverCounter;
