import React from 'react';
import components from '../../components';

function MenuPage() {

   const {
      BackgroundImage,
      Header,
      Heading,
      CategoryButtonsList
   } = components;

   return (
      <>
         <BackgroundImage category='programowanie' location='menu' />
         <div className="pageContainer">
            <Header />
            <Heading category="programowanie" location="menuPage" text="10 pytań&nbsp;&nbsp;&#8260;&nbsp;&nbsp;5 kategorii" />
            <div className="menuPage__categoriesLinksWrapper">
               <CategoryButtonsList category='programowanie' direction="row" location="startPage"/>
            </div>
         </div>
      </>
  );
}

export default MenuPage;