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
    PageTransition,
  } = components;

  const { language } = useLanguage();

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const numberOfQuestions: number = quizQuestionsList[category].length;
  const questionType: "select" | "tf" | "dnd" | "pio" =
    quizQuestionsList[category][currentQuestion]?.[language].questionType;

  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [backgroundLocation, setBackgroundLocation] =
    useState<string>(questionType);
  const [isCounterVisible, setCounterVisible] = useState(false);

  const baseTimeout: number = 1200;
  const headingVisibleTimeout: number = 500; // Timeout for showing headings
  const counterVisibleTimeout: number = headingVisibleTimeout + 200; // Timeout for showing headings
  const questionVisibleTimeout: number = headingVisibleTimeout + 200; // Timeout for showing questions
  const buttonVisibleTimeout: number = 900; // Timeout for showing buttons
  const answerCheckVisibleTimeout: number = baseTimeout - 100; // Timeout for showing buttons
  const answersVisibleTimeout: number = answerCheckVisibleTimeout - 100; // Timeout for showing questions

  const goToNextQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    setTimeout(() => {
      if (nextQuestion < numberOfQuestions) {
        setCurrentQuestion(nextQuestion);
        setBackgroundLocation(
          quizQuestionsList[category][nextQuestion]?.[language].questionType
        );
        setCounterVisible(true); // Show counter when moving to the next question
      } else {
        setShowScore(true);
      }
    }, questionVisibleTimeout); // Match this duration with the CSS transition duration
  };

  useEffect(() => {
    setCounterVisible(false); // Hide counter when question changes
    const timer = setTimeout(() => {
      setCounterVisible(true); // Show counter after question is visible
    }, counterVisibleTimeout); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, [currentQuestion]);

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
      baseTimeout,
      questionVisibleTimeout, // Pass questionVisibleTimeout
      buttonVisibleTimeout, // Pass buttonVisibleTimeout
      headingVisibleTimeout, // Pass headingVisibleTimeout
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
      <PageTransition>
        <BackgroundImage category={category} location={backgroundLocation} />
      </PageTransition>
      <div className="pageContainer">
        <Header category={category} transition={showScore ? true : false} />
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
                  text={headingText}
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
