import React, { useState, useEffect } from "react";
import quizQuestionsList from "../../context/quizQuestionsList";
import ScorePage from "../scorePage";
import components from "../../components";
import { type Category } from "../../context/categories";
import { textContent } from "../../context/textContent";
import { useLanguage } from "../../context/LanguageContext";

interface Props {
  category: Category;
}

const QuizPage = ({ category }: Props) => {
  const {
    BackgroundImage,
    QuizSelect,
    QuizPutInOrder,
    QuizDragAndDrop,
    Header,
    Heading,
    Counter,
    Logo,
  } = components;

  const { language } = useLanguage();

  const [currentQuestion, setCurrentQuestion] = useState<number>(7);
  const numberOfQuestions = quizQuestionsList.programowanie.length;
  const questionType: "select" | "tf" | "dnd" | "pio" =
    quizQuestionsList[category][currentQuestion]?.[language].questionType;

  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [backgroundLocation, setBackgroundLocation] =
    useState<string>(questionType);
  const [isCounterVisible, setCounterVisible] = useState(false);
  // const [isLastQuestion, setLastQuestion] = useState<boolean>(false);

  const answerCheckVisibleTimeout: number = 1500;

  const headingVisibleTimeout: number = 500;
  const counterVisibleTimeout: number = headingVisibleTimeout + 200;
  const questionVisibleTimeout: number = headingVisibleTimeout + 200;
  const answersVisibleTimeout: number = answerCheckVisibleTimeout - 100;
  const buttonVisibleTimeout: number = answersVisibleTimeout;

  useEffect(() => {
    setCounterVisible(false);
    const timer = setTimeout(() => {
      setCounterVisible(true);
    }, counterVisibleTimeout);
    return () => clearTimeout(timer);
  }, [currentQuestion, counterVisibleTimeout]);

  const goToNextQuestion = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);

    const nextQuestion = currentQuestion + 1;

    setTimeout(() => {
      if (nextQuestion < numberOfQuestions) {
        setCurrentQuestion(nextQuestion);
        setBackgroundLocation(
          quizQuestionsList[category][nextQuestion]?.[language].questionType
        );
        setCounterVisible(true);
      } else {
        setShowScore(true);
      }
    }, 200);
  };

  let headingText;
  switch (questionType) {
    case "select":
    case "tf":
      headingText = textContent.headings.select?.[language];
      break;
    case "dnd":
      headingText = textContent.headings.dnd?.[language];
      break;
    case "pio":
      headingText = textContent.headings.pio?.[language];
      break;
    default:
      headingText = "";
  }

  const returnQuestionComponent = () => {
    const questionProps = {
      ...quizQuestionsList[category][currentQuestion],
      ...quizQuestionsList[category][currentQuestion]?.[language],
      category,
      questionVisibleTimeout,
      buttonVisibleTimeout,
      answerCheckVisibleTimeout,
      answersVisibleTimeout,
      currentQuestion,
      goToNextQuestion,
    };

    switch (questionType) {
      case "select":
      case "tf":
        return <QuizSelect {...questionProps} />;
      case "dnd":
        return <QuizDragAndDrop {...questionProps} />;
      case "pio":
        return <QuizPutInOrder {...questionProps} />;
      default:
        return null;
    }
  };

  return (
    <>
      <BackgroundImage category={category} location={backgroundLocation} />
      <div className="pageContainer">
        <Header category={category} />
        {showScore ? (
          <ScorePage
            score={score}
            numberOfQuestions={numberOfQuestions}
            category={category}
          />
        ) : (
          <main className="quizPage contentContainer contentContainer--quiz">
            <Logo />
            <div className="quizPage__content">
              <div className="quizPage__heading">
                <Heading
                  type="h1"
                  category={category}
                  location={`quizPage--${questionType}`}
                  // isLastQuestion={isLastQuestion}
                  text={headingText}
                  timeout={headingVisibleTimeout}
                />
                <Counter
                  location="quizPage"
                  category={category}
                  currentQuestion={currentQuestion}
                  numberOfQuestions={numberOfQuestions}
                  isVisible={isCounterVisible}
                  questionType={questionType}
                  counterVisibleTimeout={counterVisibleTimeout}
                />
              </div>
              {returnQuestionComponent()}
            </div>
          </main>
        )}
      </div>
    </>
  );
};

export default QuizPage;
