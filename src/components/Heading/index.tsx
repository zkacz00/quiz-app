import React, { useEffect, useState } from "react";
import { type Category } from '../../context/categories';

interface Props {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    location: "menuPage" | "startPage" | "scorePage" | "quizPage" | "quizPage--select" | "quizPage--tf" | "quizPage--dnd" | "quizPage--pio"; 
    text: any;
    category: Category;
}

const Heading = ({ type, location, text, category }: Props): JSX.Element => {
    // const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const Tag = type as keyof JSX.IntrinsicElements;

    useEffect(() => {
        // setIsVisible(true);
        return () => {
            setIsExiting(true);
            setTimeout(() => {
                setIsExiting(false);
            }, 500); // Match this duration with the CSS animation duration
        };
    }, [location]);

      return (
        <div className={`heading heading--${category} ${location === 'scorePage' ? 'heading--scorePage' : ''} ${isExiting ? 'slide-out' : 'slide-in'}`}>
            <Tag>{text}</Tag>
        </div>
    );
};

export default Heading;