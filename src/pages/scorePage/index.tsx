import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import components from "../../components";
import { type Category } from "../../context/categories";
import { useLanguage } from "../../context/LanguageContext";
import { textContent } from "../../context/textContent";

interface Props {
  score: number;
  numberOfQuestions: number;
  category: Category;
}
const ScorePage = (props: Props) => {
  const { CategoryButtonsList, CategoryButton, NextButton, Heading, Counter } =
    components;

  const { language } = useLanguage();
  const [isCategoryButtonVisible, setCategoryButtonVisible] = useState(false);
  const [isNextButtonVisible, setNextButtonVisible] = useState(false);
  const [isCounterVisible, setCounterVisible] = useState(false);

  let counterVisibleTimeout = 800;
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCategoryButtonVisible(true);
    }, 500);

    const timer2 = setTimeout(() => {
      setNextButtonVisible(true);
    }, 1000);

    const timer3 = setTimeout(() => {
      setCounterVisible(true);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      <main className="scorePage">
        <div className="scorePage__mainContent">
          <div className="scorePage__categoryButton">
            <CategoryButton
              category={props.category}
              location="single"
              visible={isCategoryButtonVisible}
            />
          </div>
          <div className="scorePage__score">
            <Counter
              location="scorePage"
              category={props.category}
              score={props.score}
              numberOfQuestions={props.numberOfQuestions}
              isVisible={isCounterVisible}
              counterVisibleTimeout={counterVisibleTimeout}
            />
            <Heading
              type="h1"
              category={props.category}
              location="scorePage"
              text={textContent.headings.yourScore?.[language]}
            />
          </div>
          <Link to={`/quiz/${props.category}`}>
            <NextButton
              category={props.category}
              text="repeatQuiz"
              size="big"
              visible={isNextButtonVisible}
            />
          </Link>
        </div>
        <CategoryButtonsList
          direction="column"
          location="scorePage"
          category={props.category}
          visible={isCategoryButtonVisible}
        />
      </main>
    </>
  );
};

export default ScorePage;
