import React, { useState } from 'react';
import quizQuestionsList from '../../context/quizQuestionsList';
import ScorePage from '../scorePage';
import components from '../../components';

interface Props {
   category: string;
}

const QuizPage = ({category}: Props) => {

   const {
      BackgroundImage,
      QuizSelect,
      QuizPutInOrder,
      QuizDragAndDrop,
      Header,
      Heading,
      Counter,
   } = components;

   const [currentQuestion, setCurrentQuestion] = useState<number>(0);

   const numberOfQuestions : number = quizQuestionsList[category].length;
   const questionType : string = quizQuestionsList[category][currentQuestion].questionType;

   const [showScore, setShowScore] = useState<boolean>(false);
   const [score, setScore] = useState<number>(0);

   const baseTimeout : number = 500;
   const signTimeout : number = baseTimeout - 200;

   const goToNextQuestion = (isCorrect: boolean) => {
      if (isCorrect) {
         setScore(score + 1);
      }
      const nextQuestion = currentQuestion + 1;
      setTimeout( function(){
         nextQuestion < numberOfQuestions ? setCurrentQuestion(nextQuestion) : setShowScore(true);
      }, baseTimeout);
   };

   let headingText;
   questionType === "select" || "tf" ? headingText = "wybierz poprawną odpowiedź" :
      questionType === "dnd" ? headingText = "przeciągnij i upuść" :
      questionType === "pio" ? headingText = "ułóż w poprawnej kolejności" : headingText = "";

   const returnQuestionComponent = () => {
      const questionProps = {
            ...quizQuestionsList[category][currentQuestion],
            category,
            signTimeout,
            baseTimeout,
            currentQuestion,
            goToNextQuestion,
      }

      switch (questionType) {
         case "select": case "tf": return (
            <QuizSelect {...questionProps} />
         );
         case "dnd": return (
            <QuizDragAndDrop {...questionProps} />
         );
         case "pio": return (
            <QuizPutInOrder {...questionProps} />
         );
         default: return null;          
      }
   };

   return ( 
      <>
         <BackgroundImage category={category} location={showScore ? `score` : `${questionType}`} />
         <div className="pageContainer">
            <Header />
               {showScore ?
                  <ScorePage score={score} numberOfQuestions={numberOfQuestions} category={category}/> 
               :
                  <div className="quizPage">
                     <div className="quizPage__heading">
                        <Heading category={category} location="quizPage" text={headingText} /> 
                        <Counter location="quizPage" category={category} currentQuestion={currentQuestion} numberOfQuestions={numberOfQuestions}/>
                     </div>                  
                        {returnQuestionComponent()}
                  </div>
               }
         </div>
      </>
   );
}

export default QuizPage;