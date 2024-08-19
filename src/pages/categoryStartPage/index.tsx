import React from 'react';
import {Link} from 'react-router-dom';
import components from '../../components';

interface Props {
   category: string;
}

const CategoryStartPage = ({category}: Props) => {

   const {
      BackgroundImage,
      Header,
      Heading,
      NextButton,
      CategoryButton
   } = components;

   return (
      <>
         <BackgroundImage category={category} location="start" />
         <div className="pageContainer">
            <Header />
            <div className="categoryStartPage">
               <Heading category={category} location="startPage" text="wybrana kategoria:" />
               <div className="categoryStartPage__categoryButton">
                  <CategoryButton category={category} location="single"/>
               </div>
               <Link to={`/quiz/${category}/start`}>
                  <NextButton category={category} text='rozpocznij' size='big' />
               </Link>
            </div>
         </div>
      </>
   );
}
export default CategoryStartPage;


