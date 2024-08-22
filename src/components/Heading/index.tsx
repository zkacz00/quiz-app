import React from "react";
import {type Category} from '../../context/quizUtils'

interface Props {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    location: string;
    text: string;
    category: Category;
}

const Heading = ({type, location, text, category}: Props) : JSX.Element => {
   const Tag = type as keyof JSX.IntrinsicElements;

   return (
      <div className={`shadowBackground shadowBackground--${category} shadowBackground--${location}`}>
         <Tag>{text}</Tag>
      </div>
   );
}

export default Heading;