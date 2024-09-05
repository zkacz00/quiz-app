import React, { useEffect, useState } from "react";
import components from "../../components";
import { useLanguage } from "../../context/LanguageContext";
import { textContent } from "../../context/textContent";

function MenuPage() {
  const {
    BackgroundImage,
    Header,
    Heading,
    CategoryButtonsList,
    Logo,
  } = components;

  const [buttonsVisible, setButtonsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BackgroundImage category="programowanie" location="menu" />
        <div className="pageContainer">
          <Header category="programowanie" location="menuPage" withMenuButton={false}/>
          <main className="menuPage contentContainer">
            <Logo location="menuPage" />
            <Heading
              type="h1"
              category="programowanie"
              location="menuPage"
              text={textContent.headings.menu?.[language]}
            />
            <div className="menuPage__categoriesLinksWrapper">
              <CategoryButtonsList
                category="programowanie"
                direction="row"
                location="startPage"
                visible={buttonsVisible}
              />
            </div>
          </main>
        </div>
    </>
  );
}

export default MenuPage;
