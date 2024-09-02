import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from '../Navigation';
import { textContent } from '../../context/textContent';
import { Category } from "../../context/categories";
import { useLanguage } from '../../context/LanguageContext';

const Header = ({category, transition} : {category : Category, transition? : boolean} ) : JSX.Element => {
   const [withTransition, setWithTransition] = useState(transition);
   const { language } = useLanguage();

   useEffect(() => {
      // For example, you might want to set withTransition to true only when transition is true
      setWithTransition(transition);
   }, [transition]); 

   return (
      <nav className={`header header--${category} ${withTransition ? 'with-transition' : 'without-transition'}`}>
         <div className="header__icon">
            <Link to="/"><img src={require('../../assets/general/quiz-icon.png')} alt={textContent.buttonText.goBackToMenu?.[language]}/></Link>
         </div>
         <div className="header__navigation">
            <Navigation />
         </div>
      </nav>
   );
}

export default Header;