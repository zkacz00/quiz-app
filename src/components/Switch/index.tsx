// Switch.tsx
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

interface SwitchProps {
    disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({ disabled }) => {
    const { language, setLanguage } = useLanguage();
    const isLeftSelected = language === "pl";
    const isRightSelected = language === "en";

    const handleSwitch = (side: "left" | "right") => {
        if (disabled) return;
        setLanguage(side === "left" ? "pl" : "en");
    };

    return (
        <div className={`switch ${disabled ? "switch--disabled" : ""}`}>
            <div
                className={`switch__option ${isLeftSelected ? "switch__option--selected" : ""} ${disabled ? "switch__option--disabled" : ""}`}
                onClick={() => handleSwitch("left")}
            >
                PL
            </div>
            <div className="switch__middle">/</div>
            <div
                className={`switch__option ${isRightSelected ? "switch__option--selected" : ""} ${disabled ? "switch__option--disabled" : ""}`}
                onClick={() => handleSwitch("right")}
            >
                ENG
            </div>
        </div>
    );
};

export default Switch;
