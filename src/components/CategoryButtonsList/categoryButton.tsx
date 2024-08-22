import React from "react";
import { buttonTextAlternatives } from "../../context/quizUtils";
import { type Category } from "../../context/quizUtils";

interface Props {
   location: string;
   category: Category;
   className?: string;
}

const capitalizeFirstLetter = (string: string) => {
   return string.charAt(0).toUpperCase() + string.slice(1);
};

const CategoryButton = ({ location, category, className }: Props): JSX.Element => {
   return (
      <div
         className={`categoryButton ${className} ${location && ` categoryButton--${location}`}`}
      >
         <img
            className="categoryButton__icon"
            src={require(`../../assets/${category}/icon--${category}.png`)}
            alt={`${buttonTextAlternatives.selectCategory}: ${capitalizeFirstLetter(
               category
            )}`}
         />
         <img
            className="categoryButton__pinkLine"
            src={require(`../../assets/general/pink-line.png`)}
            alt=""
         />
         <span className="categoryButton__text">{category}</span>
      </div>
   );
};
export default CategoryButton;
