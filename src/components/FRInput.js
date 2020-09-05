import React, { Component } from "react";

// Take component as it parameter
const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      {/* This ref value is attach from the parent element */}
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;
