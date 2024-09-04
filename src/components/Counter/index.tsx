import React, { useEffect, useState, useRef } from "react";
import { type Category } from '../../context/categories';

interface Props {
   location: "menuPage" | "startPage" | "scorePage" | "quizPage" | "quizPage--select" | "quizPage--tf" | "quizPage--dnd" | "quizPage--pio"; 
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
   const prevLocationRef = useRef(props.location);

   
   useEffect(() => {
      const prevLocation = prevLocationRef.current;
      prevLocationRef.current = props.location;

      if (
          !(
              (prevLocation === "quizPage--select" && props.location === "quizPage--tf")
          )
      ) {
      setIsVisible(false); 
      const timer = setTimeout(() => {
         setIsVisible(true);
      }, props.counterVisibleTimeout);

      return () => clearTimeout(timer);
      }
  }, [props.location]);

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