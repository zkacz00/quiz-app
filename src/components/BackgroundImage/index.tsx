interface Props {
    location: string;
    category: string;
}

const BackgroundImage = ({location, category}: Props) : JSX.Element => {
   return ( 
      <img className="backgroundImage" src={require(`../../assets/${category}/page-background--${location}--${category}.png`).default} alt="img"/>
   );
}

export default BackgroundImage;