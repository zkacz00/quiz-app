import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import components from "../../components";
import { type Category } from "../../context/categories";
import { useLanguage } from "../../context/LanguageContext";
import { textContent } from "../../context/textContent";

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

  const { language } = useLanguage();
  const [isCategoryButtonVisible, setCategoryButtonVisible] = useState(false);
  const [isNextButtonVisible, setNextButtonVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCategoryButtonVisible(true);
    }, 500); // Delay before showing the CategoryButton

    const timer2 = setTimeout(() => {
      setNextButtonVisible(true);
    }, 1000); // Delay before showing the NextButton

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <PageTransition>
        <BackgroundImage category={category} location="start" />
      </PageTransition>
      <div className="pageContainer">
        <Header
          category={category}
          transition={category === "programowanie" ? false : true}
        />
        <main className="categoryStartPage contentContainer">
          <Logo />
          <Heading
            type="h1"
            category={category}
            location="startPage"
            text={textContent.headings.selectedCategory?.[language]}
          />
          <CategoryButton
            category={category}
            location="single"
            visible={isCategoryButtonVisible}
          />
          <Link to={`/quiz/${category}/start`}>
            <NextButton
              category={category}
              text="start"
              size="big"
              visible={isNextButtonVisible} // Pass the visibility state
            />
          </Link>
        </main>
      </div>
    </>
  );
};

export default CategoryStartPage;
