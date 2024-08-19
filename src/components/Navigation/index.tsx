import {useHistory, Link} from "react-router-dom";

const Navigation = () : JSX.Element => {

   let history = useHistory();
   
   return (
      <div className="navigation">
         <img className="navigation__icon" src={require('../../assets/general/back-icon.png').default} onClick={history.goBack} alt="img"/>
         <Link to="/"><img className="navigation__icon" src={require('../../assets/general/close-icon.png').default} alt="img"/></Link>
      </div>
   );
}

export default Navigation;

