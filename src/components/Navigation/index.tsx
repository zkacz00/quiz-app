import React from "react";
import Switch from "../Switch";
import { useNavigate, Link } from "react-router-dom";
import { textContent } from "../../context/textContent";
import { useLanguage } from "../../context/LanguageContext";

const Navigation = ({ withMenuButton = true }: { withMenuButton?: boolean }): JSX.Element => {
  let navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <div className="navigation">
      <Switch />
      <img
        className="navigation__icon"
        src={require("../../assets/general/back-icon.png")}
        onClick={() => navigate(-1)}
        alt={textContent.buttonText.goBack?.[language]}
      />
      {withMenuButton === true && (
        <Link to="/">
          <img
            className="navigation__icon"
            src={require("../../assets/general/close-icon.png")}
            alt={textContent.buttonText.close?.[language]}
          />
        </Link>
      )}
    </div>
  );
};

export default Navigation;
