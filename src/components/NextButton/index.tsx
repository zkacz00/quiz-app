interface Props {
    size: string;
    text: string;
    category: string;
}

const NextButton = ({size, text, category}: Props) : JSX.Element => {
   return ( 
      <div className={`buttonNext buttonNext--${size} buttonNext--${category}`}>
         <span>{text}</span>
         <img src={require(`../../assets/${category}/start-button--${category}.png`).default} alt="img"/>
      </div>
   );
}
export default NextButton;