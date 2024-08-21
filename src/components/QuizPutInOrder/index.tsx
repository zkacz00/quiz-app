import React, {useState, useEffect} from 'react';
import {DragDropContext, Droppable, Draggable} from '@hello-pangea/dnd';
import AnswerCheck from '../AnswerCheck';
import NextButton from '../NextButton';

interface ReorderProps {
   startIndex: number;
   endIndex: number;
   list: Array<{answerText : string, isCorrect? : boolean}>;
}

interface Props {
   category: string;
   questionText1: string;
   questionText2?: string;
   questionText3?: string;
   signTimeout: number;
   baseTimeout: number;
   currentQuestion: number;
   answerCorrect? : Array <{answerText : string}>;
   answerOptions: Array<{answerText : string, isCorrect? : boolean}>;
   goToNextQuestion: (isCorrect: boolean) => void;
}

const reorder = ({list, startIndex, endIndex}: ReorderProps) => {
   const result = Array.from(list);
   const [removed] = result.splice(startIndex, 1);
   result.splice(endIndex, 0, removed);
   return result;
};

const QuizPutInOrder = (props: Props) : JSX.Element => {
   const [answerOptions, setAnswerOptions] = useState<Array<{answerText : string}>>([]); 
   const [isCorrect, setIsCorrect] = useState<boolean>(false); 
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const [isDragDisabled, setIsDragDisabled] = useState<boolean>(false);

   useEffect(() => {
       setAnswerOptions(props.answerOptions); 
   },[props])

   const handleAnswerCheck = () => {
      let isCorrect;
      if (JSON.stringify(answerOptions) === JSON.stringify(props.answerCorrect)) {
         setIsCorrect(true);
         isCorrect = true;
      }
      else { 
         setIsCorrect(false);
         isCorrect = false;
      }

      setIsVisible(true);
      setTimeout(
         function(){
            setIsVisible(false);
         },
      props.signTimeout);

      setIsDragDisabled(true);
      setTimeout(
         function(){
            setIsDragDisabled(false);
         },
      props.baseTimeout);

      props.goToNextQuestion(isCorrect);
   }    

   const onDragEnd = (result: any) => {
      if (!result.destination || result.destination.index === result.source.index) {
         return;
      }

      const updatedAnswersOrder: Array<{answerText : string}> = reorder(
         {list: answerOptions,
         startIndex: result.source.index,
         endIndex: result.destination.index}
      );
      setAnswerOptions(updatedAnswersOrder);
   }

const questionList = (answerOptions: Array<{answerText : string, isCorrect? : boolean}>) => {
   return answerOptions.map((answerOption: {answerText : string, isCorrect? : boolean}, index: number) => (
      <Draggable draggableId={'a'+index} index={index} isDragDisabled={isDragDisabled} key={index}>
         {provided => (
            <div className={`quizPagePio__buttonAnswer quizPagePio__buttonAnswer--${props.category}`}
               ref={provided.innerRef}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
            >               
            {answerOption.answerText}
            </div>
         )}
      </Draggable>
   ));
};

   return (
      <div className="quizPagePio">

         <div className="quizPagePio__questionSection">   
            <h2>{props.currentQuestion+1}. {props.questionText1}</h2>
            <p>{props.questionText2}</p>
            <p>{props.questionText3}</p>
         </div>

         <div className="quizPagePio__answersSection">
            <DragDropContext onDragEnd={onDragEnd}>
               <div className={`quizPagePio__answers`}>
                  <AnswerCheck category={props.category} isVisible={isVisible} isCorrect={isCorrect}/>
                  <div className={`quizPagePio__answersNr`}>
                     {answerOptions.map((answerOption: {answerText : string, isCorrect? : boolean}, index: number) => { 
                        return (
                           <p key={index}>{index+1}.</p>
                        )}
                     )}
                  </div>
                  <Droppable droppableId="list">
                     {provided => (
                        <div className="quizPagePio__dropPlace" ref={provided.innerRef} {...provided.droppableProps}>
                           {questionList(answerOptions)}
                           {provided.placeholder}
                        </div>
                     )}
                  </Droppable>
               </div>
            </DragDropContext>
            <div className="quizPagePio__buttonNext" onClick={()=>handleAnswerCheck()}>
               <NextButton category={props.category} text='dalej' size='small'/>
            </div>
         </div>
      </div>
   );
}

export default QuizPutInOrder;