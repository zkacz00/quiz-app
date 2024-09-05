import React, { useState, useEffect } from "react";

const Logo = ({ location }: { location?: string }): JSX.Element => {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    if (location === "menuPage") {
      setVisible(false);
      setTimeout(() => {
        setVisible(true);
      }, 500);
    } else {
      setVisible(true);
    }
  }, [location]);

  return (
    <img
      className={`logo ${isVisible ? "visible" : "not-visible"}`}
      src={require("../../assets/general/quiz-text.png")}
      alt=""
    />
  );
};

export default Logo;
