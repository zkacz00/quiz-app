interface Props {
    location: string;
    text: string;
    category: string;
}

const Heading = ({location, text, category}: Props) : JSX.Element => {
   return (
      <div className={`shadowBackground shadowBackground--${category} shadowBackground--${location}`}>
         <span>{text}</span>
      </div>
   );
}

export default Heading;