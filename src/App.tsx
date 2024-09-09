import './styles/themes/default/theme.scss';
import React, { useEffect } from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

import MenuPage from './pages/menuPage';
import CategoryStartPage from './pages/categoryStartPage';
import QuizPage from './pages/quizPage';
import ErrorPage from './pages/errorPage';

import ErrorBoundary from './components/ErrorBoundary';

import { categoriesPolishList } from './context/categories';
import {type Category} from './context/categories'


function App() {

   useEffect(() => {
      if ('ontouchstart' in window || navigator.maxTouchPoints) {
         document.body.classList.add('no-hover');
      }
   }, []);

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
                  <Route path='*' element={<ErrorPage error={null} />} />
               </Routes>
            </Router>
         </ErrorBoundary>
      </>
   );

}

export default App;