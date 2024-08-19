import React, { useState, useEffect, useMemo } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DndElement from './dndElement'
import AnswerCheck from '../AnswerCheck';
import NextButton from '../NextButton';

interface OnDragEndProps {
   result: any;
   columns: any;
   setColumns: any;
}

interface Props {
   questionText1: string;
   questionText2?: string;
   questionText3?: string;
   category: string;
   signTimeout: number;
   baseTimeout: number;
   currentQuestion: number;
   answerCorrect?: Array <{answerText : string}>;
   answerOptions: Array<{answerText : string, isCorrect? : boolean}>;
   goToNextQuestion: (isCorrect: boolean) => void;
}


const onDragEnd = ({result, columns, setColumns}: OnDragEndProps) => {
   if (!result.destination) return;

   const {source, destination} = result;
   const sourceColumn = columns[source.droppableId];
   const destinationColumn = columns[destination.droppableId];
   const sourceItems = [...sourceColumn.items];
   const destinationItems = [...destinationColumn.items];
   const answersColumnItems = [...columns.answers.items];
   const [removed] = sourceItems.splice(source.index, 1);

   const settingColumns = (condition?: string) => {
      if(condition === "replaced, source: all-answers-column, destination: selected-answer-columns") {
         setColumns({
            ...columns,
            answers: {
               ...columns.answers,
               items: answersColumnItems
            },
            [destination.droppableId]: {
               ...destinationColumn,
               items: destinationItems
            }
         });
      }
      else if (condition === "source & destination: the same column") {
         setColumns({
            ...columns,
            [source.droppableId]: {
               ...sourceColumn,
               items: sourceItems
            }
         });
      }
      else {
         setColumns({
            ...columns,
            [source.droppableId]: {
               ...sourceColumn,
               items: sourceItems
            },
            [destination.droppableId]: {
               ...destinationColumn,
               items: destinationItems
            }
         });
      }
   }

   if (sourceColumn !== destinationColumn) {
      let itemsToRemove;
      if (destinationColumn === columns.answers) {
         destinationItems.splice(destination.index, 0, removed);
         itemsToRemove = 0;
      }
      else if (destinationColumn !== columns.answers) {
         destinationItems.splice(0, 0, removed);
         itemsToRemove = 1;
      }

      const [replaced] = destinationItems.splice(1, itemsToRemove);
      if (replaced){
         if(sourceColumn !== columns.answers){
            sourceItems.splice(source.index, 1, replaced);
            settingColumns();
         }
         else if(sourceColumn === columns.answers){
            answersColumnItems.splice(source.index, 1, replaced);
            settingColumns("replaced, source: all-answers-column, destination: selected-answer-columns");
         }
      }
      else if (!replaced) {
         settingColumns();
      }
   } 
   else if (sourceColumn === destinationColumn) {
      sourceItems.splice(destination.index, 0, removed);
      settingColumns("source & destination: the same column");
   }
};

const QuizDragAndDrop = (props: Props) : JSX.Element  => {
   const [answerOptions, setAnswerOptions] = useState<Array<{answerText : string, isCorrect? : boolean}>>([]);
   const [isDragDisabled, setIsDragDisabled] = useState<boolean>(false);

   useEffect(() => {
       setAnswerOptions(props.answerOptions);
   }, [props])

   answerOptions.forEach((item: any, i: number) => {
     item.id = i + 1;
     item.id = item.id.toString();
   });

   const dragDropPlaces = useMemo(() => { 
      return {
         place1: {
            id: 'place1',
            items: []
         },
         place2: {
            id: 'place2',
            items: []
         },
         answers: {
            id: 'answers',
            items: answerOptions
         }
      }
   },[answerOptions]);

   const [columns, setColumns] = useState(dragDropPlaces);

   useEffect(() => {
      setColumns(dragDropPlaces);
   }, [answerOptions, dragDropPlaces])

   const [selectedAnswer1, setSelectedAnswer1] = useState<string>("");
   const [selectedAnswer2, setSelectedAnswer2] = useState<string>("");

   const [isFirstOpCorrect, setIsFirstOpCorrect] = useState<boolean>(false); 
   const [isSecOpCorrect, setIsSecOpCorrect] = useState<boolean>(false);
   const [isVisible, setIsVisible] = useState<boolean>(false);

   const handleAnswerCheck = () => {
      if(typeof props.answerCorrect !== "undefined") {
         let isCorrect : boolean;
         selectedAnswer1 === props.answerCorrect[0].answerText ? setIsFirstOpCorrect(true) : setIsFirstOpCorrect(false);
         selectedAnswer2 === props.answerCorrect[1].answerText ? setIsSecOpCorrect(true) : setIsSecOpCorrect(false);
         selectedAnswer1 === props.answerCorrect[0].answerText && selectedAnswer2 === props.answerCorrect[1].answerText 
         ? isCorrect = true : isCorrect = false;
   
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
   }

   useEffect(() => {
      ((selectedAnswers, selectedAnswer1) => {
         columns.place1.items.length === 0 ? setSelectedAnswer1("") : setSelectedAnswer1(columns.place1.items[0]['answerText']);
      })()
   }, [columns.place1.items]);
   
   useEffect(() => {
      ((selectedAnswers, selectedAnswer2) => {
         columns.place2.items.length === 0 ? setSelectedAnswer2("") : setSelectedAnswer2(columns.place2.items[0]['answerText']);
      })()
   }, [columns.place2.items]);


   return (
      <div className="quizPageDnd">

         <DragDropContext onDragEnd={(result) => onDragEnd({result, columns, setColumns})}>

            <div className="quizPageDnd__questionSection">
               
               <p>{props.currentQuestion+1}. {props.questionText1}</p>
               
               <div className="quizPageDnd__questionSectionPart">
                  <p>{props.questionText2}</p>
                  <div className="quizPageDnd__answerCheckWrapper">
                     <div className={`quizPageDnd__questionDropPlaceWrapper quizPageDnd__questionDropPlaceWrapper--${props.category}`}>
                        <DndElement column={columns.place1} section="question" category={props.category} 
                        isDragDisabled={isDragDisabled} 
                        />
                     </div>
                        <AnswerCheck category={props.category} isVisible={isVisible} isCorrect={isFirstOpCorrect}/>
                  </div>
               </div>

               <div className="quizPageDnd__questionSectionPart">
                  <p>{props.questionText3}</p>
                  <div className="quizPageDnd__answerCheckWrapper">
                     <div className={`quizPageDnd__questionDropPlaceWrapper quizPageDnd__questionDropPlaceWrapper--${props.category}`}>
                        <DndElement column={columns.place2} section="question" category={props.category} 
                        isDragDisabled={isDragDisabled} 

                        />
                     </div>
                        <AnswerCheck category={props.category} isVisible={isVisible} isCorrect={isSecOpCorrect}/>
                  </div>
               </div>
               
            </div>
            <div className="quizPageDnd__answersSection">
               <DndElement column={columns.answers} section="answers" category={props.category} 
               isDragDisabled={isDragDisabled} 
               />
               <div onClick={()=>handleAnswerCheck()}>
                  <NextButton category={props.category} text='dalej' size='small' />
               </div>
            </div>

         </DragDropContext>

      </div>
   );
}

export default QuizDragAndDrop;