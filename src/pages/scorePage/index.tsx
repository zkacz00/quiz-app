import {Link} from 'react-router-dom';
import components from '../../components';

interface Props {
   score: number;
   numberOfQuestions: number;
   category: string;
}
const ScorePage = (props: Props) => {

   const {
      CategoryButtonsList,
      CategoryButton,
      NextButton,
      Heading,
      Counter,
   } = components;

   return ( 
      <main className="scorePage">
         <div className="scorePage__mainContent">
            <div className="scorePage__categoryButton">
               <CategoryButton category={props.category} location="single"/>
            </div>
            <div className="scorePage__score">
               <Counter location="scorePage" category={props.category} score={props.score} numberOfQuestions={props.numberOfQuestions}/>
               <Heading type="h1" category={props.category} location="scorePage" text="twój wynik" />
            </div>
            <Link to={`/quiz/${props.category}`}>
               <NextButton category={props.category} text='powtórz quiz' size='big' />
            </Link>
         </div>
         <div className="scorePage__list">
               <p>wybierz<br />inną kategorię</p> 
               <div>
                  <CategoryButtonsList direction="column" location="scorePage" category={props.category}/>
               </div>
         </div>
      </main>
   );
}

export default ScorePage;