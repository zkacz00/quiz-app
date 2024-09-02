import React from "react";
import { textContent } from "../../context/textContent";
import { useLanguage } from "../../context/LanguageContext";
import { type Category } from "../../context/categories";

interface Props {
  index?: number;
  category: Category;
  selectedAnswerId?: number;
  isVisible: boolean;
  isCorrect?: boolean;
}

const AnswerCheck = (props: Props): JSX.Element => {
  const { index, category, selectedAnswerId, isVisible, isCorrect } = props;

  const { language } = useLanguage();
  const correctAnswerText = textContent.answerCheck.correct?.[language];
  const incorrectAnswerText = textContent.answerCheck.incorrect?.[language];
  const imageSrc = require(`../../assets/general/${
    isCorrect ? "correct" : "incorrect"
  }-answer-icon.png`);

  return (
    <div
      className={`
        answerCheck 
        answerCheck--${category} 
        answerCheck--${isCorrect ? "correct" : "incorrect"}
        ${
          selectedAnswerId === index
            ? "answerCheck--selected"
            : "answerCheck--notSelected"
        }
        answerCheck--${isVisible ? "visible" : "invisible"}
      `}
    >
      {isVisible && (
        <img
          className={`answerCheck__img--${isCorrect ? "correct" : "incorrect"}`}
          src={imageSrc}
          alt={isCorrect ? correctAnswerText : incorrectAnswerText}
        />
      )}
    </div>
  );
};

export default AnswerCheck;
