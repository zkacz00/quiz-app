import React from "react";

const Logo = (): JSX.Element => {
  return (
    <img
      className="logo"
      src={require("../../assets/general/quiz-text.png")}
      alt=""
    />
  );
};

export default Logo;
