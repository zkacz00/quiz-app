import { Draggable, Droppable } from "@hello-pangea/dnd";
import React from 'react';

interface Props {
   section: string;
   category: string;
   isDragDisabled: boolean;
   column: {id: string, items: Array<{answerText: string}>};
}

const DndElement = ({column, section, category, isDragDisabled}: Props) : JSX.Element  => {

   return (
      <Droppable droppableId={column.id} key={`k_columnId`} >
         {(provided, snapshot) => { return (

            <div className={`quizPageDnd__${section}DropPlace`} {...provided.droppableProps} ref={provided.innerRef}>
               {column.items.map((item: {answerText: string}, index: number) => { return (

                  <Draggable key={item.answerText} draggableId={item.answerText} index={index} isDragDisabled={isDragDisabled}>
                     {(provided, snapshot) => { return (

                        <div className={`quizPageDnd__buttonAnswer quizPageDnd__buttonAnswer--${category}`} 
                           ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps} 
                        >
                           {item.answerText}
                        </div>

                     );}}
                  </Draggable>

               );})}
               {provided.placeholder}
            </div>

         );}}
      </Droppable>
    );
}

export default DndElement;