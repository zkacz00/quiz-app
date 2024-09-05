import React, { useEffect, useState } from "react";
import { type Category } from "../../context/categories";
interface Props {
  location: string;
  category: Category;
}

const BackgroundImage = ({ location, category }: Props): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [backgroundImage, setBackgroundImage] = useState<string | undefined>(
    undefined
  );

  const getBackgroundColor = (category: Category) => {
    switch (category) {
      case "programowanie":
        return "#1057ff";
      case "historia":
        return "#322b27";
      case "kultura":
        return "#64574d";
      default:
        return "#26153D";
    }
  };

  const backgroundColor = getBackgroundColor(category);

  const [prevBackgroundImage, setPrevBackgroundImage] = useState<
    string | undefined
  >(backgroundImage);

  useEffect(() => {
    try {
      const newImage = require(`../../assets/${category}/page-background--${location}--${category}.png`);
      const img = new Image();
      img.src = newImage;

      img.onload = () => {
        setBackgroundImage(newImage);
        setIsLoading(false);
      };
    } catch (error) {
      console.error("Error loading background image:", error);
      setIsLoading(false); // Optionally handle loading state
    }
  }, [location, category]);

  useEffect(() => {
    if (backgroundImage !== prevBackgroundImage) {
      const timer = setTimeout(() => {
        setPrevBackgroundImage(backgroundImage);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
    }
  }, [backgroundImage, prevBackgroundImage]);

  return (
    <div
      className={`backgroundImage`}
      style={{
        backgroundImage: isLoading ? "none" : `url(${backgroundImage})`,
        backgroundColor: isLoading ? backgroundColor : "transparent",
        opacity: isLoading ? 0 : 1,
        transition: "opacity 1.5s ease, background-image 1.5s ease",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default BackgroundImage;
