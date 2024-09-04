import React from "react";
import { useLanguage } from '../../context/LanguageContext';
import { textContent } from '../../context/textContent';
import { Category } from '../../context/categories';

type ButtonTextKeys = keyof typeof textContent.buttonText;

interface Props {
    size: string;
    text: ButtonTextKeys;
    category: Category;
    visible?: boolean;
    blocked?: boolean;
}

const NextButton: React.FC<Props> = ({ size, text, category, visible = true, blocked }) => {
    const { language } = useLanguage();
    const buttonText = textContent.buttonText[text][language];

    return (
        <div className={`buttonNext buttonNext--${size} buttonNext--${category} ${visible ? 'visible' : 'not-visible'} ${blocked ? "blocked" : ""}`}>
            <span>{buttonText}</span>
            <img src={require(`../../assets/${category}/start-button--${category}.png`)} alt={buttonText} />
        </div>
    );
}

export default NextButton;
