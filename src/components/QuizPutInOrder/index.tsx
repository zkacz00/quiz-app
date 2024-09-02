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
  baseTimeout: number;
  questionVisibleTimeout: number;
  buttonVisibleTimeout: number;
  headingVisibleTimeout: number;
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
  const [areAnswersVisible, setAnswersVisible] = useState<boolean>(false);
  const [isDragDisabled, setIsDragDisabled] = useState<boolean>(false);
  const [isNextButtonVisible, setNextButtonVisible] = useState<boolean>(false);
  const [isAnswerCheckVisible, setIsAnswerCheckVisible] =
    useState<boolean>(false);

  useEffect(() => {
    setAnswerOptions(props.answerOptions);
    const timer = setTimeout(() => {
      setAnswersVisible(true); // Fade in after a delay
    }, props.questionVisibleTimeout);
    return () => clearTimeout(timer);
  }, [props]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNextButtonVisible(true);
    }, props.buttonVisibleTimeout);
    return () => clearTimeout(timer);
  }, []);

  const handleAnswerCheck = () => {
    const correctAnswers = props.answerCorrect || [];

    if (answerOptions.length !== correctAnswers.length) {
      console.error(
        "Answer options and correct answers do not have the same length."
      );
      return;
    }

    const updatedAnswers = checkAnswerOrder(answerOptions, correctAnswers);
    const isCorrectOrder = updatedAnswers.every((item) => item.isCorrect);

    setAnswerOptions(updatedAnswers);
    setIsCorrect(isCorrectOrder);

    setIsAnswerCheckVisible(true);

    setTimeout(() => {
      setIsAnswerCheckVisible(false);
      setAnswersVisible(false);
    }, props.questionVisibleTimeout);

    setIsDragDisabled(true);
    setTimeout(() => {
      setIsDragDisabled(false);
    }, props.baseTimeout);

    setNextButtonVisible(true);

    props.goToNextQuestion(isCorrectOrder);
  };

  const onDragEnd = (result: any) => {
    if (
      !result.destination ||
      result.destination.index === result.source.index
    ) {
      return;
    }

    const updatedAnswersOrder = reorder({
      list: answerOptions,
      startIndex: result.source.index,
      endIndex: result.destination.index,
    });

    setAnswerOptions(updatedAnswersOrder);

    const correctAnswers = props.answerCorrect || [];
    const updatedAnswers = checkAnswerOrder(
      updatedAnswersOrder,
      correctAnswers
    );
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
          areAnswersVisible ? "visible" : "not-visible"
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
          <div className={`quizPagePio__answers`}>
            <div className={`quizPagePio__answersNr`}>
              {answerOptions.map(
                (
                  answerOption: { answerText: string; isCorrect?: boolean },
                  index: number
                ) => {
                  return <p key={index}>{index + 1}.</p>;
                }
              )}
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
          onClick={() => handleAnswerCheck()}
        >
          <NextButton
            category={props.category}
            text="next"
            size="small"
            visible={isNextButtonVisible}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizPutInOrder;