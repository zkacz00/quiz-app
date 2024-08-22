import React, { useEffect, useState } from "react";
import { type Category } from '../../context/quizUtils';

interface Props {
    location: string;
    category: Category;
}

const BackgroundImage = ({ location, category }: Props): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
    const backgroundColor = getBackgroundColor(category);

    useEffect(() => {
        const newImage = require(`../../assets/${category}/page-background--${location}--${category}.png`);
        const img = new Image();
        img.src = newImage;

        img.onload = () => {
            setBackgroundImage(newImage);
            setIsLoading(false);
        };
    }, [location, category]);

    return (
        <div
            className={`backgroundImage`}
            style={{
                backgroundImage: isLoading ? 'none' : `url(${backgroundImage})`,
                backgroundColor: isLoading ? backgroundColor : 'transparent',
                opacity: isLoading ? 0 : 1,
                transition: 'opacity 0.8s ease, background-image 0s ease',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
            }}
        />
    );
};

const getBackgroundColor = (category: Category) => {
    switch (category) {
        case 'programowanie':
            return '#1057ff';
        case 'historia':
            return '#322b27';
        case 'kultura':
            return '#64574d';
        default:
            return '#26153D';
    }
};

export default BackgroundImage;