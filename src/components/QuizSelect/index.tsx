import React, { useState, useEffect } from "react";
import AnswerCheck from "../AnswerCheck";
import { type Category } from "../../context/categories";

interface Props {
  category: Category;
  questionType: string;
  questionText1: string;
  questionText2?: string;
  questionText3?: string;
  questionVisibleTimeout: number;
  answerCheckVisibleTimeout: number;
  answersVisibleTimeout: number;
  currentQuestion: number;
  goToNextQuestion: (isCorrect: boolean) => void;
  answerOptions: Array<{ answerText: string; isCorrect?: boolean }>;
}

const QuizSelect = (props: Props) => {
  const [isQuestionVisible, setIsQuestionVisible] = useState<boolean>(false);
  const [isAnswerCheckVisible, setIsAnswerCheckVisible] =useState<boolean>(false);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | undefined>();
  const [wasClicked, setWasClicked] = useState<boolean>(true);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsQuestionVisible(true);
    }, props.questionVisibleTimeout);
    const timer2 = setTimeout(() => {
      setWasClicked(false);
    }, props.answersVisibleTimeout);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [
    props.currentQuestion,
    props.questionVisibleTimeout,
    props.answersVisibleTimeout,
  ]);

  const handleAnswerSelect = (
    isCorrect: boolean | undefined,
    index: number
  ) => {
    if (typeof isCorrect === "boolean" && !wasClicked) {
      setWasClicked(true);
      setSelectedAnswerId(index);
      setIsAnswerCheckVisible(true);

      setTimeout(() => {
        setIsQuestionVisible(false);
        props.goToNextQuestion(isCorrect);
        setIsAnswerCheckVisible(false);
      }, props.answerCheckVisibleTimeout);
    }
  };

  const quizQuestions = props.answerOptions.map((answerOption, index) => (
    <div
      className={`quizPageSelect__buttonAnswer quizPageSelect__buttonAnswer--${index} 
        quizPageSelect__buttonAnswer--${props.category} 
        ${isQuestionVisible ? "visible" : "not-visible"} 
        ${wasClicked ? "blocked" : ""} 
        ${wasClicked && selectedAnswerId === index ? "selected" : ""}`}
      onClick={() => handleAnswerSelect(answerOption.isCorrect, index)}
      key={`b-${index}`}
    >
      {answerOption.answerText}
      <AnswerCheck
        index={index}
        category={props.category}
        selectedAnswerId={selectedAnswerId}
        isVisible={isAnswerCheckVisible}
        isCorrect={answerOption.isCorrect}
      />
    </div>
  ));

  return (
    <div className={`quizPageSelect quizPageSelect--${props.questionType}`}>
      <div
        className={`quizPageSelect__questionSection quizPageSelect__questionSection--${
          props.questionType
        } ${isQuestionVisible ? "visible" : "not-visible"}`}
      >
        <h2 className="quizPageSelect__heading">
          {props.currentQuestion + 1}. {props.questionText1}
        </h2>
        {props.questionText2 && (
          <p className="quizPageSelect__questionText">{props.questionText2}</p>
        )}
        {props.questionText3 && (
          <p className="quizPageSelect__questionText">{props.questionText3}</p>
        )}
      </div>
      <div
        className={`quizPageSelect__answersSection quizPageSelect__answersSection--${props.questionType}`}
      >
        {quizQuestions}
      </div>
    </div>
  );
};

export default QuizSelect;
