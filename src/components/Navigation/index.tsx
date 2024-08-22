import React from "react";
import {useNavigate, Link} from "react-router-dom";
import { buttonTextAlternatives } from '../../context/quizUtils';

const Navigation = () : JSX.Element => {

   let navigate = useNavigate();
   
   return (
      <div className="navigation">
         <img className="navigation__icon" src={require('../../assets/general/back-icon.png')} onClick={() => navigate(-1)} alt={buttonTextAlternatives.goBack}/>
         <Link to="/"><img className="navigation__icon" src={require('../../assets/general/close-icon.png')} alt={buttonTextAlternatives.close}/></Link>
      </div>
   );
}

export default Navigation;

