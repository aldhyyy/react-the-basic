import React from "react";

const Hero = (props) => {
  const { heroName } = props;

  if (heroName === "Joker") {
    throw new Error("upss, error"); // throw error
  }

  return (
    <div>
      <h1>{heroName}</h1>
    </div>
  );
};

export default Hero;
