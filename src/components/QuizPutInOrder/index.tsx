import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import AnswerCheck from "../AnswerCheck";
import NextButton from "../NextButton";
import { type Category } from "../../context/categories";

interface ReorderProps {
  startIndex: number;
  endIndex: number;
  list: Array<{ answerText: string; isCorrect?: boolean }>;
}

interface Props {
  category: Category;
  questionText1: string;
  questionText2?: string;
  questionText3?: string;
  questionVisibleTimeout: number;
  answersVisibleTimeout: number;
  answerCheckVisibleTimeout: number;
  buttonVisibleTimeout: number;
  currentQuestion: number;
  answerCorrect?: Array<{ answerText: string }>;
  answerOptions: Array<{ answerText: string; isCorrect?: boolean }>;
  goToNextQuestion: (isCorrect: boolean) => void;
}

const reorder = ({ list, startIndex, endIndex }: ReorderProps) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const checkAnswerOrder = (
  currentAnswers: Array<{ answerText: string }>,
  correctAnswers: Array<{ answerText: string }>
) => {
  return currentAnswers.map((answer, index) => ({
    ...answer,
    isCorrect: correctAnswers[index]?.answerText === answer.answerText,
  }));
};

const QuizPutInOrder = (props: Props): JSX.Element => {
  const [answerOptions, setAnswerOptions] = useState<
    Array<{ answerText: string; isCorrect?: boolean }>
  >([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isDragDisabled, setIsDragDisabled] = useState<boolean>(true);
  const [isNextButtonVisible, setNextButtonVisible] = useState<boolean>(false);
  const [isAnswerCheckVisible, setIsAnswerCheckVisible] = useState<boolean>(false);
  const [areAnswersVisible, setAnswersVisible] = useState<boolean | undefined>(false);
  const [isQuestionVisible, setQuestionVisible] = useState<boolean>(false);

  useEffect(() => {
    setAnswerOptions(props.answerOptions);
  }, [props]);

  useEffect(() => {
    setAnswersVisible(false);
    const timer1 = setTimeout(() => {
      setQuestionVisible(true);
    }, props.questionVisibleTimeout);
    const timer2 = setTimeout(() => {
      setIsDragDisabled(false);
    }, props.answersVisibleTimeout + props.answerOptions.length * 200);

    const timer3 = setTimeout(() => {
      setNextButtonVisible(true);
    }, props.buttonVisibleTimeout);

    const timer4 = setTimeout(() => {
      setAnswersVisible(true);
    }, props.answersVisibleTimeout);
    const timer5 = setTimeout(() => {
      setAnswersVisible(undefined);
    }, props.answersVisibleTimeout + props.answerOptions.length * 200);
    const timer6 = setTimeout(() => {
      setQuestionVisible(true);
    }, props.questionVisibleTimeout);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, [props.currentQuestion]);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setNextButtonVisible(true);
    }, props.buttonVisibleTimeout);
    return () => clearTimeout(timer);
  }, []);

  const handleAnswerCheck = () => {
    if(isDragDisabled) return;

    const correctAnswers = props.answerCorrect || [];

    if (answerOptions.length !== correctAnswers.length) {
      console.error("Answer options and correct answers do not have the same length.");
      return;
    }

    setAnswersVisible(true);
    setIsDragDisabled(true);
    setIsAnswerCheckVisible(true);
    setQuestionVisible(true);

    const updatedAnswers = checkAnswerOrder(answerOptions, correctAnswers);
    const isCorrectOrder = updatedAnswers.every((item) => item.isCorrect);

    setAnswerOptions(updatedAnswers);
    setIsCorrect(isCorrectOrder);

    setTimeout(() => {
      setQuestionVisible(false);
      setIsAnswerCheckVisible(false);
      setNextButtonVisible(false);
      setAnswersVisible(false);
      setIsDragDisabled(true);
      props.goToNextQuestion(isCorrect);
    }, props.answerCheckVisibleTimeout);
  };

  const onDragEnd = (result: any) => {
    if (!result.destination || result.destination.index === result.source.index) {
      return;
    }

    const updatedAnswersOrder = reorder({
      list: answerOptions,
      startIndex: result.source.index,
      endIndex: result.destination.index,
    });

    const correctAnswers = props.answerCorrect || [];
    const updatedAnswers = checkAnswerOrder(updatedAnswersOrder, correctAnswers);

    setAnswerOptions(updatedAnswers);
    const isCorrectOrder = updatedAnswers.every((item) => item.isCorrect);
    setIsCorrect(isCorrectOrder);
  };

  const questionList = (
    answerOptions: Array<{ answerText: string; isCorrect?: boolean }>
  ) => {
    return answerOptions.map((answerOption, index) => (
      <Draggable
        draggableId={"a" + index}
        index={index}
        isDragDisabled={isDragDisabled}
        key={index}
      >
        {(provided) => (
          <div
            className={`quizPagePio__buttonAnswer quizPagePio__buttonAnswer--${props.category} ${isDragDisabled ? "blocked" : ""}`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {answerOption.answerText}
            <AnswerCheck
              category={props.category}
              isVisible={isAnswerCheckVisible}
              isCorrect={answerOption.isCorrect}
            />
          </div>
        )}
      </Draggable>
    ));
  };

  return (
    <div className="quizPagePio">
      <div
        className={`quizPagePio__questionSection ${
          isQuestionVisible ? "visible" : "not-visible"
        }`}
      >
        <h2>
          {props.currentQuestion + 1}. {props.questionText1}
        </h2>
        {props.questionText2 && <p>{props.questionText2}</p>}
        {props.questionText3 && <p>{props.questionText3}</p>}
      </div>

      <div className="quizPagePio__answersSection">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className={`quizPagePio__answers ${
            areAnswersVisible === true
              ? "visible"
              : areAnswersVisible === false
              ? "not-visible"
              : ""
          }`}>
            <div className={`quizPagePio__answersNr`}>
              {answerOptions.map((_, index) => (
                <p key={index}>{index + 1}.</p>
              ))}
            </div>
            <Droppable droppableId="list">
              {(provided) => (
                <div
                  className="quizPagePio__dropPlace"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {questionList(answerOptions)}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
        <div
          className="quizPagePio__buttonNext"
          onClick={handleAnswerCheck}
        >
          <NextButton
            category={props.category}
            text="next"
            size="small"
            visible={isNextButtonVisible}
            blocked={isDragDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizPutInOrder;
