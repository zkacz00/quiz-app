import quizCategoriesList from '../../context/quizCategoriesList';
import CategoryButton from './categoryButton';
import {Link} from 'react-router-dom';

interface Props {
    category: string;
    location: string;
    direction: string;
}

const CategoryButtonsList = ({category, location, direction}: Props) : JSX.Element => {

   let list;
   location === "score-page" ? list = quizCategoriesList.filter(otherCategories => otherCategories !== category) : list = quizCategoriesList;

   const quizCategoriesLinks = list.map((cat, key) => 
      (
         <Link to={`/quiz/${cat}`} key={`l-${key}`} 
         className={`categoryButton categoryButton--list categoryButton--${direction} categoryButton--${category}`}>
            <CategoryButton category={cat} location={location}/>         
         </Link>
      )
   );

   return ( 
      <>
         {quizCategoriesLinks}
      </>
   );
}

export default CategoryButtonsList;