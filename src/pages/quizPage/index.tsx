import React, { useState, useEffect } from "react";
import quizQuestionsList from "../../context/quizQuestionsList";
import ScorePage from "../scorePage";
import components from "../../components";
import { type Category } from "../../context/quizUtils";

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

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const numberOfQuestions: number = quizQuestionsList[category].length;
  const questionType: string = quizQuestionsList[category][currentQuestion].questionType;

  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [backgroundLocation, setBackgroundLocation] = useState<string>(questionType); // Initialize with questionType

  const baseTimeout: number = 500;
  const signTimeout: number = baseTimeout - 200;

  const goToNextQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    setTimeout(function () {
      nextQuestion < numberOfQuestions
        ? setCurrentQuestion(nextQuestion)
        : setShowScore(true);
    }, baseTimeout);
    setBackgroundLocation(nextQuestion < numberOfQuestions ? quizQuestionsList[category][nextQuestion].questionType : "score");
  };

  let headingText;
  questionType === "select" || questionType === "tf"
    ? (headingText = "wybierz poprawną odpowiedź")
    : questionType === "dnd"
    ? (headingText = "przeciągnij i upuść")
    : questionType === "pio"
    ? (headingText = "ułóż w poprawnej kolejności")
    : (headingText = "");

  const returnQuestionComponent = () => {
    const questionProps = {
      ...quizQuestionsList[category][currentQuestion],
      category,
      signTimeout,
      baseTimeout,
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
        <BackgroundImage
          category={category}
          location={backgroundLocation}
        />
      </PageTransition>
      {/* <PageTransition> */}
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
                    location="quizPage"
                    text={headingText}
                  />
                  <Counter
                    location="quizPage"
                    category={category}
                    currentQuestion={currentQuestion}
                    numberOfQuestions={numberOfQuestions}
                  />
                </div>
                {returnQuestionComponent()}
              </div>
            </main>
          )}
        </div>
      {/* </PageTransition> */}
    </>
  );
};

export default QuizPage;