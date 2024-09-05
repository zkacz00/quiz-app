import React, { useEffect, useState, useRef } from "react";
import { type Category } from "../../context/categories";

interface Props {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  timeout?: number;
  location:
    | "menuPage"
    | "startPage"
    | "scorePage"
    | "quizPage"
    | "quizPage--select"
    | "quizPage--tf"
    | "quizPage--dnd"
    | "quizPage--pio";
  text: any;
  category: Category;
  isLastQuestion?: boolean;
}

const Heading = ({
  type,
  location,
  text,
  category,
//   isLastQuestion,
  timeout,
}: Props): JSX.Element => {
  const [isExiting, setIsExiting] = useState(false);
  const Tag = type as keyof JSX.IntrinsicElements;
  const prevLocationRef = useRef(location);

  useEffect(() => {
    const prevLocation = prevLocationRef.current;
    prevLocationRef.current = location;

    if (
      !(
        (prevLocation === "quizPage--select" && location === "quizPage--tf") ||
        (prevLocation === "quizPage--tf" && location === "quizPage--select")
      )
    ) {
      setIsExiting(true);
      const timeoutId = setTimeout(() => {
        setIsExiting(false);
      }, timeout ?? 500);
      return () => clearTimeout(timeoutId);
    }
  }, [location, timeout]);

  return (
    <div
      className={`heading heading--${category} ${
        location === "scorePage" ? "heading--scorePage" : ""
      } ${isExiting ? "slide-out" : "slide-in"}`}
    >
      <Tag
        style={{
          opacity: isExiting ? 0 : 1,
          transform: isExiting ? "none" : "translateY(0)",
        }}
      >
        {text}
      </Tag>
    </div>
  );
};

export default Heading;
