import React, { useEffect, useState } from "react";
import { type Category } from '../../context/categories';

interface Props {
   location: string;
   category: Category;
   numberOfQuestions: number;
   currentQuestion?: number;
   score?: number;
   isVisible: boolean;
   questionType?: string;
   counterVisibleTimeout: number
}

const Counter = (props: Props): JSX.Element => {
   const [isVisible, setIsVisible] = useState(false);
   let firstValue: number | undefined;

   useEffect(() => {
      setIsVisible(false); 
      const timer = setTimeout(() => {
         setIsVisible(true);
      }, props.counterVisibleTimeout);

      return () => clearTimeout(timer);
   }, [props.location, props.questionType !== "tf" ? props.questionType : undefined]);

   switch (props.location) {
      case "quizPage":
         if (typeof props.currentQuestion !== "undefined") {
            firstValue = props.currentQuestion + 1;
         }
         break;
      case "scorePage":
         firstValue = props.score;
         break;
      default:
         firstValue = undefined;
   }

   return (
      <div className={`counter counter--${props.category} counter--${props.location} ${isVisible ? 'counter--visible' : 'counter--not-visible'}`}>
         <span>{firstValue}/</span>
         <span>{props.numberOfQuestions}</span>
      </div>
   );
};

export default Counter;