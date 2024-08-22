import React from "react";
import quizCategoriesList from "../../context/quizCategoriesList";
import CategoryButton from "./categoryButton";
import { Link } from "react-router-dom";
import { type Category } from "../../context/quizUtils";

interface Props {
  category: Category;
  location: string;
  direction: string;
  visible: boolean;
}

const CategoryButtonsList = ({
  category,
  location,
  direction,
  visible,
}: Props): JSX.Element => {
  let list: Category[];
  location === "score-page"
    ? (list = quizCategoriesList.filter(
        (otherCategories) => otherCategories !== category
      ) as Category[])
    : (list = quizCategoriesList as Category[]);

  const quizCategoriesLinks = list.map((cat: Category, key: number) => (
    <Link to={`/quiz/${cat}`} key={`l-${key}`} className="linkButtonWrapper">
      <CategoryButton
        className={`categoryButton categoryButton--${key} categoryButton--list categoryButton--${direction} categoryButton--${category} ${
          visible ? "visible" : ""
        }`}
        category={cat}
        location={location}
      />
    </Link>
  ));

  return <>{quizCategoriesLinks}</>;
};

export default CategoryButtonsList;
