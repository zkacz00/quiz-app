import React from "react";
import { type Category } from "../../context/categories";
import { textContent } from "../../context/textContent";
import { useLanguage } from "../../context/LanguageContext";
import { categoriesList } from "../../context/categories";

interface Props {
  location: string;
  category: Category;
  className?: string;
  visible?: boolean;
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const CategoryButton = ({
  location,
  category,
  className,
  visible,
}: Props): JSX.Element => {
  const { language } = useLanguage();
  if (visible === undefined) visible = true; // Default to true if not provided

  const categoryDetails = categoriesList.find(
    (cat) => cat.en === category || cat.pl === category
  );
  const categoryNameInPolish = categoryDetails?.pl || category;
  const categoryNameInCurrentLanguage = categoryDetails?.[language] || category;

  return (
    <div
      className={`categoryButton ${className || ""} ${
        location ? `categoryButton--${location}` : ""
      } ${visible ? "visible" : "not-visible"}`}
    >
      <img
        className="categoryButton__icon"
        src={require(`../../assets/${categoryNameInPolish}/icon--${categoryNameInPolish}.png`)}
        alt={`${
          textContent.buttonText.selectCategory[language]
        }: ${capitalizeFirstLetter(categoryNameInCurrentLanguage)}`}
      />
      <img
        className="categoryButton__pinkLine"
        src={require(`../../assets/general/pink-line.png`)}
        alt=""
      />
      <span className="categoryButton__text">
        {capitalizeFirstLetter(categoryNameInCurrentLanguage)}
      </span>
    </div>
  );
};

export default CategoryButton;
