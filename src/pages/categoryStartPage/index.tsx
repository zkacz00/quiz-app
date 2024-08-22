import React from "react";
import { Link } from "react-router-dom";
import components from "../../components";
import { type Category } from "../../context/quizUtils";
interface Props {
  category: Category;
}

const CategoryStartPage = ({ category }: Props) => {
  const {
    BackgroundImage,
    Header,
    Heading,
    NextButton,
    CategoryButton,
    Logo,
    PageTransition,
  } = components;

  return (
    <>
       <PageTransition>
      <BackgroundImage category={category} location="start" />
      </PageTransition>
        <div className="pageContainer">
          <Header category={category} />
          <main className="categoryStartPage contentContainer">
            <Logo />
            <Heading
              type="h1"
              category={category}
              location="startPage"
              text="wybrana kategoria:"
            />
            <div className="categoryStartPage__categoryButton">
              <CategoryButton category={category} location="single" />
            </div>
            <Link to={`/quiz/${category}/start`}>
              <NextButton category={category} text="rozpocznij" size="big" />
            </Link>
          </main>
        </div>
      
    </>
  );
};
export default CategoryStartPage;
