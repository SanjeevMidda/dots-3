import React from "react";

const Dot = () => {
  let randomColor = () => {
    let colors = [
      "red",
      "blue",
      "green",
      "grey",
      "pink",
      "purple",
      "yellow",
      "red",
      "brown",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  console.log(randomColor());

  let dotStyles = {
    background: `linear-gradient(${randomColor()}, ${randomColor()})`,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };
  return <div className="dot" style={dotStyles}></div>;
};

export default Dot;
