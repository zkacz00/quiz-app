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
  const { BackgroundImage, Header, Heading, NextButton, CategoryButton, Logo } =
    components;

  const { language } = useLanguage();
  const [isCategoryButtonVisible, setCategoryButtonVisible] = useState(false);
  const [isNextButtonVisible, setNextButtonVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCategoryButtonVisible(true);
    }, 500);

    const timer2 = setTimeout(() => {
      setNextButtonVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <BackgroundImage category={category} location="start" />
      <Header category={category} />
      <div className="pageContainer">
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
              visible={isNextButtonVisible}
            />
          </Link>
        </main>
      </div>
    </>
  );
};

export default CategoryStartPage;
