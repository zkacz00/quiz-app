import Navigation from '../Navigation';

const Header = () : JSX.Element => {

   return (
      <div className="header">
         <div className="header__icon">
            <img src={require('../../assets/general/quiz-icon.png').default} alt="img"/>
         </div>
         <div className="header__logo">
            <img src={require('../../assets/general/quiz-text.png').default} alt="img"/>
         </div>
         <div className="header__navigation">
            <Navigation />
         </div>
      </div>
   );
}

export default Header;