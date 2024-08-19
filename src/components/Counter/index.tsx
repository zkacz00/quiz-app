interface Props {
   location: string;
   category: string;
   numberOfQuestions: number;
   currentQuestion?: number;
   score?: number;
}

const Counter = (props: Props) : JSX.Element => {

   let firstValue : number | undefined;
   
   switch (props.location) {
      case "quizPage": 
         if(typeof props.currentQuestion !== "undefined") {
            firstValue = props.currentQuestion + 1; 
         }
         break;
      case "scorePage": 
        firstValue = props.score; 
         break;
      default: firstValue = undefined;          
   };
   
   return (
      <div className={`counter counter--${props.category} counter--${props.location}`}>
         <span>{firstValue}/</span>
         <span>{props.numberOfQuestions}</span>
      </div>
   );
}

export default Counter;