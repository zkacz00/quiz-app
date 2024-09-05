import './styles/themes/default/theme.scss';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MenuPage from './pages/menuPage';
import CategoryStartPage from './pages/categoryStartPage';
import QuizPage from './pages/quizPage';
import ErrorPage from './pages/errorPage';

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
                  <Route path='*' element={<ErrorPage error={null} />} /> {/* Catch-all route for 404 */}
               </Routes>
            </Router>
         </ErrorBoundary>
      </>
   );

}

export default App;