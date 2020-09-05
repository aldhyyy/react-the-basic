import React from "react";

const ClickCounter = (props) => {
  const { count, increment } = props;

  return (
    <>
      <button onClick={increment}>Click {count}</button>
    </>
  );
};

export default ClickCounter;
