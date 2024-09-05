import React from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { type Category } from "../../context/categories";

interface Props {
  section: string;
  category: Category;
  isDragDisabled: boolean;
  column: { id: string; items: Array<{ answerText: string }> };
  isVisible: boolean | undefined;
}

const DndElement = ({
  column,
  section,
  category,
  isDragDisabled,
  isVisible,
}: Props): JSX.Element => {
  return (
    <Droppable droppableId={column.id} key={`k_columnId`}>
      {(provided) => {
        return (
          <div
            className={`quizPageDnd__${section}DropPlace`}
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ minHeight: "70px", position: "relative" }}
          >
            {column.items.map((item: { answerText: string }, index: number) => {
              return (
                <Draggable
                  key={item.answerText}
                  draggableId={item.answerText}
                  index={index}
                  isDragDisabled={isDragDisabled}
                >
                  {(provided) => {
                    return (
                      <div
                        className={`quizPageDnd__buttonAnswer quizPageDnd__buttonAnswer--${category} quizPageDnd__buttonAnswer--${index} 
                        ${isDragDisabled ? "blocked" : ""}
                        ${
                          isVisible === true
                            ? "visible"
                            : isVisible === false
                            ? "not-visible"
                            : ""
                        }`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.answerText}
                      </div>
                    );
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default DndElement;
