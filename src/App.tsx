import './styles/themes/default/theme.scss';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MenuPage from './pages/menuPage';
import CategoryStartPage from './pages/categoryStartPage';
import QuizPage from './pages/quizPage';
import ErrorBoundary from './components/ErrorBoundary';

import { categoriesPolishList } from './context/categories';
import {type Category} from './context/categories'

function App() {

   const quizPagesRoutes = categoriesPolishList.map((category: Category, key: number) => 
      (
         <Route path={`/quiz/${category}`} key={`r-${key}`} element={<CategoryStartPage category={category} />} />
      ));

   const questionComponentsRoutes = categoriesPolishList.map((category: Category, key: number) => 
      (
         <Route path={`/quiz/${category}/start`} key={`r-${key}`} element={<QuizPage category={category} />} />
      ));

   return (
      <>
         <ErrorBoundary>
            <Router>
               <Routes>
                  <Route path='/' element={<MenuPage />} />
                  {quizPagesRoutes}
                  {questionComponentsRoutes}
               </Routes>
            </Router>
         </ErrorBoundary>
      </>
   );

}

export default App;