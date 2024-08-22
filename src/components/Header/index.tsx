import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from '../Navigation';
import { buttonTextAlternatives } from '../../context/quizUtils';

const Header = ({category} : {category : 'historia' | 'kultura' | 'motoryzacja' | 'programowanie' | 'technologia'}) : JSX.Element => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      setIsVisible(true);
   }, []);

   return (
      <nav className={`header header--${category} ${isVisible ? 'slide-in' : ''}`}>
         <div className="header__icon">
            <Link to="/"><img src={require('../../assets/general/quiz-icon.png')} alt={buttonTextAlternatives.goBackToMenu}/></Link>
         </div>
         <div className="header__navigation">
            <Navigation />
         </div>
      </nav>
   );
}

export default Header;