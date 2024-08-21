import Navigation from '../Navigation';

const Header = () : JSX.Element => {

   return (
      <nav className="header">
         <div className="header__icon">
            <img src={require('../../assets/general/quiz-icon.png')} alt=""/>
         </div>
         <div className="header__logo">
            <img src={require('../../assets/general/quiz-text.png')} alt=""/>
         </div>
         <div className="header__navigation">
            <Navigation />
         </div>
      </nav>
   );
}

export default Header;