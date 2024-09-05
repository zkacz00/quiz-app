import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from '../Navigation';
import { textContent } from '../../context/textContent';
import { Category } from "../../context/categories";
import { useLanguage } from '../../context/LanguageContext';

const Header = ({ category, location, withMenuButton } : { category : Category, location?: string, withMenuButton?: boolean }) : JSX.Element => {
   const [slideIn, setSlideIn] = useState(false);

   const { language } = useLanguage();

   useEffect(() => {
      if (location === "menuPage") {
         setSlideIn(true);
      }
   }, []);

   return (
      <nav className={`header header--${category} ${location && slideIn ? 'visible' : location === undefined ? 'without-transition' : 'not-visible'}`}>
         <div className="header__icon">
            <Link to="/"><img src={require('../../assets/general/quiz-icon.png')} alt={textContent.buttonText.goBackToMenu?.[language]}/></Link>
         </div>
         <div className="header__navigation">
            <Navigation withMenuButton={withMenuButton}/>
         </div>
      </nav>
   );
}

export default Header;
