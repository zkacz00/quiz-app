interface Props {
    location: string;
    category: string;
}

const CategoryButton = ({location, category}: Props) : JSX.Element => {
   return ( 
      <div className={`${location ? `categoryButton categoryButton--${location}` : ""}`}>
         <img className="categoryButton__icon" src={require(`../../assets/${category}/icon--${category}.png`).default} alt="img"/>
         <img className="categoryButton__pinkLine" src={require(`../../assets/general/pink-line.png`).default} alt="img"/>
         <span className="categoryButton__text">{category}</span>
      </div>
   );
}
export default CategoryButton;