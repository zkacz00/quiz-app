import React, { useState } from 'react';
import AnswerCheck from '../AnswerCheck';
import {type Category} from '../../context/quizUtils'

interface Props {
   category: Category;
   questionType: string; 
   questionText1: string;
   questionText2?: string;
   questionText3?: string;
   signTimeout: number;
   baseTimeout: number;
   currentQuestion: number;
   goToNextQuestion: (isCorrect: boolean) => void;
   answerOptions: Array<{answerText : string, isCorrect? : boolean}>;
}

const QuizSelect = (props: Props) => {

   const [isVisible, setIsVisible] = useState<boolean>(false);
   const [selectedAnswerId, setSelectedAnswerId] = useState<number | undefined>();
   const [wasClicked, setWasClicked] = useState<boolean>(false);

   const handleAnswerCheck = (isCorrect: boolean | undefined, index: number) => {
      if (typeof isCorrect === "boolean") {
         setWasClicked(true);
         setSelectedAnswerId(index);
         setIsVisible(true);
   
         setTimeout(
            function(){
               setIsVisible(false);
            },
         props.signTimeout);

         props.goToNextQuestion(isCorrect);

         setTimeout( 
            function(){
               setWasClicked(false);
            }, 
         props.baseTimeout-1);
      }
   }

   const handleOnClickNull = () => {};

   const quizQuestions = props.answerOptions.map((answerOption: {answerText : string, isCorrect? : boolean}, index: number) : JSX.Element => ( 
         <div 
            className={`quizPageSelect__buttonAnswer quizPageSelect__buttonAnswer--${props.category}`} 
            onClick={wasClicked ? () => handleOnClickNull() : () => handleAnswerCheck(answerOption.isCorrect, index)}
            key={`b-${index}`}
         >
            {answerOption.answerText}
            <AnswerCheck 
               index={index} 
               category={props.category} 
               selectedAnswerId={selectedAnswerId} 
               isVisible={isVisible} 
               isCorrect={answerOption.isCorrect} 
            />
         </div>
   ))

   return (
      <div className={`quizPageSelect quizPageSelect--${props.questionType}`}>
         <div className={`quizPageSelect__questionSection quizPageSelect__questionSection--${props.questionType}`}>
            <h2>{props.currentQuestion+1}. {props.questionText1}</h2>
            {props.questionText2 && <p>{props.questionText2}</p>}
            {props.questionText3 && <p>{props.questionText3}</p>}
         </div>
         <div className={`quizPageSelect__answersSection quizPageSelect__answersSection--${props.questionType}`}>
            {quizQuestions}
         </div>
      </div>
   )
}

export default QuizSelect;