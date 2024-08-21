import {useHistory, Link} from "react-router-dom";
import { buttonTextAlternatives } from '../../context/quizUtils';

const Navigation = () : JSX.Element => {

   let history = useHistory();
   
   return (
      <div className="navigation">
         <img className="navigation__icon" src={require('../../assets/general/back-icon.png')} onClick={history.goBack} alt={buttonTextAlternatives.goBack}/>
         <Link to="/"><img className="navigation__icon" src={require('../../assets/general/close-icon.png')} alt={buttonTextAlternatives.close}/></Link>
      </div>
   );
}

export default Navigation;

