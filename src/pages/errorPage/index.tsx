import React from "react";
import BackgroundImage from "../../components/BackgroundImage";
import Header from "../../components/Header";
import { textContent } from "../../context/textContent";
import { useLanguage } from "../../context/LanguageContext";

interface ErrorPageProps {
  error: Error | null;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  const { language } = useLanguage();

  return (
    <>
      <BackgroundImage category="programowanie" location="menu" />
      <Header
        category="programowanie"
        location="menuPage"
        withMenuButton={true}
      />
      <main className="pageContainer">
        <div className="errorPage contentContainer">
          <h1>{textContent.error.heading?.[language]}</h1>
          <p>{textContent.error.message?.[language]}</p>
          {error && <p>{error.message}</p>}
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
