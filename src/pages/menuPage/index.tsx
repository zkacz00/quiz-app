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
    PageTransition,
  } = components;

  const [buttonsVisible, setButtonsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonsVisible(true);
    }, 500); // Delay before buttons appear
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BackgroundImage category="programowanie" location="menu" />
      <PageTransition>
        <div className="pageContainer">
          <Header category="programowanie" transition={true} />
          <main className="menuPage contentContainer">
            <Logo />
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
      </PageTransition>
    </>
  );
}

export default MenuPage;
