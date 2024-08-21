import './styles/themes/default/theme.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router';

import MenuPage from './pages/menuPage';
import CategoryStartPage from './pages/categoryStartPage';
import QuizPage from './pages/quizPage';

import quizCategoriesList from './context/quizCategoriesList';

function App() {

   const quizPagesRoutes = quizCategoriesList.map((category: string, key: number) => 
      (
         <Route exact path={`/quiz/${category}`} key={`r-${key}`}>
           <CategoryStartPage category={category} key={`c-${key}`} />
         </Route>
      ));

   const questionComponentsRoutes = quizCategoriesList.map((category: string, key: number) => 
      (
         <Route exact path={`/quiz/${category}/start`} key={`r-${key}`}>
            <QuizPage category={category} key={`c-${key}`} />
         </Route>
      ));

   return (
      <>
         <Router>
            <Switch>
               <Route exact path='/' component={MenuPage} />
               {quizPagesRoutes}
               {questionComponentsRoutes}
            </Switch>
         </Router>    
      </>
   );

}

export default App;
