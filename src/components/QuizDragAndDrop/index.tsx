import React, { useState, useEffect, useMemo } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import DndElement from "./dndElement";
import AnswerCheck from "../AnswerCheck";
import NextButton from "../NextButton";
import { type Category } from "../../context/categories";

interface OnDragEndProps {
  result: any;
  columns: any;
  setColumns: any;
}

interface Props {
  questionText1: string;
  questionText2?: string;
  questionText3?: string;
  category: Category;
  questionVisibleTimeout: number;
  buttonVisibleTimeout: number;
  answersVisibleTimeout: number;
  answerCheckVisibleTimeout: number;
  currentQuestion: number;
  answerCorrect?: Array<{ answerText: string }>;
  answerOptions: Array<{ answerText: string; isCorrect?: boolean }>;
  goToNextQuestion: (isCorrect: boolean) => void;
}

const onDragEnd = ({ result, columns, setColumns }: OnDragEndProps) => {
  if (!result.destination) return;

  const { source, destination } = result;
  const sourceColumn = columns[source.droppableId];
  const destinationColumn = columns[destination.droppableId];
  const sourceItems = [...sourceColumn.items];
  const destinationItems = [...destinationColumn.items];
  const [removed] = sourceItems.splice(source.index, 1);

  const settingColumns = () => {
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destinationColumn,
        items: destinationItems,
      },
    });
  };

  if (sourceColumn !== destinationColumn) {
    destinationItems.splice(destination.index, 0, removed);
    settingColumns();
  } else {
    sourceItems.splice(destination.index, 0, removed);
    settingColumns();
  }
};

const QuizDragAndDrop = (props: Props): JSX.Element => {
  const [answerOptions, setAnswerOptions] = useState<
    Array<{ answerText: string; isCorrect?: boolean }>
  >([]);

  const [isDragDisabled, setIsDragDisabled] = useState<boolean>(true);
  const [isNextButtonVisible, setNextButtonVisible] = useState(false);
  const [isQuestionVisible, setQuestionVisible] = useState<boolean>(false);
  const [isAnswerCheckVisible, setIsAnswerCheckVisible] =useState<boolean>(false);
  const [areAnswersVisible, setAnswersVisible] = useState<boolean | undefined>(false);

  const [selectedAnswer1, setSelectedAnswer1] = useState<string>("");
  const [selectedAnswer2, setSelectedAnswer2] = useState<string>("");

  const [isFirstOpCorrect, setIsFirstOpCorrect] = useState<boolean>(false);
  const [isSecOpCorrect, setIsSecOpCorrect] = useState<boolean>(false);

  const dragDropPlaces = useMemo(
    () => ({
      place1: { id: "place1", items: [] },
      place2: { id: "place2", items: [] },
      answers: { id: "answers", items: answerOptions },
    }),
    [answerOptions]
  );

  const [columns, setColumns] = useState(dragDropPlaces);

  useEffect(() => {
    setAnswersVisible(false);
    const timer1 = setTimeout(() => {
      setQuestionVisible(true);
    }, props.questionVisibleTimeout);
    const timer2 = setTimeout(() => {
      setIsDragDisabled(false);
    }, props.answersVisibleTimeout + (props.answerOptions.length + 2) * 200);
    const timer3 = setTimeout(() => {
      setNextButtonVisible(true);
    }, props.buttonVisibleTimeout);
    const timer4 = setTimeout(() => {
      setAnswersVisible(true);
    }, props.answersVisibleTimeout);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [
    props.currentQuestion,
    props.answerOptions.length,
    props.answersVisibleTimeout,
    props.buttonVisibleTimeout,
    props.questionVisibleTimeout,
  ]);
  useEffect(() => {
    if (!isDragDisabled) {
      setAnswersVisible(undefined);
    }
  }, [isDragDisabled]);

  const handleAnswerCheck = () => {
    if (isDragDisabled) return;
    if (!props.answerCorrect) return;

    setAnswersVisible(true);
    setIsDragDisabled(true);
    setIsAnswerCheckVisible(true);
    setQuestionVisible(true);

    const isCorrect =
      selectedAnswer1 === props.answerCorrect[0].answerText &&
      selectedAnswer2 === props.answerCorrect[1].answerText;

    setIsFirstOpCorrect(selectedAnswer1 === props.answerCorrect[0].answerText);
    setIsSecOpCorrect(selectedAnswer2 === props.answerCorrect[1].answerText);

    setTimeout(() => {
      setQuestionVisible(false);
      setIsAnswerCheckVisible(false);
      setNextButtonVisible(false);
      setAnswersVisible(false);
      setIsDragDisabled(true);
      props.goToNextQuestion(isCorrect);
    }, props.answerCheckVisibleTimeout);
  };

  useEffect(() => {
    setAnswerOptions(props.answerOptions);
  }, [props.answerOptions]);

  useEffect(() => {
    setColumns(dragDropPlaces);
  }, [dragDropPlaces]);

  useEffect(() => {
    if (columns.place1.items.length === 0) {
      setSelectedAnswer1("");
    } else {
      setSelectedAnswer1(columns.place1.items[0]["answerText"]);
    }
  }, [columns.place1.items]);

  useEffect(() => {
    if (columns.place2.items.length === 0) {
      setSelectedAnswer2("");
    } else {
      setSelectedAnswer2(columns.place2.items[0]["answerText"]);
    }
  }, [columns.place2.items]);

  return (
    <div className="quizPageDnd">
      <DragDropContext
        onDragEnd={(result) => onDragEnd({ result, columns, setColumns })}
      >
        <div
          className={`quizPageDnd__questionSection ${
            isQuestionVisible ? "visible" : "not-visible"
          }`}
        >
          <h2>{`${props.currentQuestion + 1}. ${props.questionText1}`}</h2>

          <div className="quizPageDnd__questionSectionPart">
            <p>{props.questionText2}</p>
            <div className="quizPageDnd__answerCheckWrapper">
              <div
                className={`quizPageDnd__questionDropPlaceWrapper quizPageDnd__questionDropPlaceWrapper--${props.category}`}
              >
                <DndElement
                  column={columns.place1}
                  section="question"
                  category={props.category}
                  isDragDisabled={isDragDisabled}
                  isVisible={isQuestionVisible}
                />
              </div>
              <AnswerCheck
                category={props.category}
                isVisible={isAnswerCheckVisible}
                isCorrect={isFirstOpCorrect}
              />
            </div>
          </div>

          <div className="quizPageDnd__questionSectionPart">
            <p>{props.questionText3}</p>
            <div className="quizPageDnd__answerCheckWrapper">
              <div
                className={`quizPageDnd__questionDropPlaceWrapper quizPageDnd__questionDropPlaceWrapper--${props.category}`}
              >
                <DndElement
                  column={columns.place2}
                  section="question"
                  category={props.category}
                  isDragDisabled={isDragDisabled}
                  isVisible={isQuestionVisible}
                />
              </div>
              <AnswerCheck
                category={props.category}
                isVisible={isAnswerCheckVisible}
                isCorrect={isSecOpCorrect}
              />
            </div>
          </div>
        </div>

        <div className="quizPageDnd__answersSection">
          <DndElement
            column={columns.answers}
            section="answers"
            category={props.category}
            isDragDisabled={isDragDisabled}
            isVisible={areAnswersVisible}
          />
          <div onClick={handleAnswerCheck}>
            <NextButton
              category={props.category}
              text="next"
              size="small"
              visible={isNextButtonVisible}
              blocked={isDragDisabled}
            />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default QuizDragAndDrop;
