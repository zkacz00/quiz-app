import React from "react";
import { categoriesList, Category } from "../../context/categories";
import CategoryButton from "./categoryButton";
import { Link } from "react-router-dom";

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
  const list: Category[] =
    location === "score-page"
      ? categoriesList
          .map((cat) => cat.pl)
          .filter((cat: Category) => cat !== (category as Category))
      : categoriesList.map((cat) => cat.pl as Category);

  const quizCategoriesLinks = list.map((cat: Category, key: number) => (
    <Link to={`/quiz/${cat}`} key={`l-${key}`} className="linkButtonWrapper">
      <CategoryButton
        className={`categoryButton categoryButton--${key} categoryButton--list categoryButton--${direction} categoryButton--${category}`}
        visible={visible}
        category={cat}
        location={location}
      />
    </Link>
  ));

  return <>{quizCategoriesLinks}</>;
};

export default CategoryButtonsList;
