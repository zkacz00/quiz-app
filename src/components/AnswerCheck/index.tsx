import { answerCheck } from '../../context/quizUtils';

interface Props {
    category: string;
    isVisible: boolean;
    isCorrect?: boolean;
    index?: number;
    selectedAnswerId?: number;
}

const AnswerCheck = (props: Props) : JSX.Element => {
    return (
        <div className={`answerCheck answerCheck--${props.category} 
        answerCheck--${props.index === props.selectedAnswerId ? `${props.isVisible}Visible` : `falseVisible`} `}
        >
			<img className={`answerCheck__img--${props.isCorrect}`} src={require(`../../assets/general/${props.isCorrect}-answer-icon.png`)} alt={`${props.isCorrect ? answerCheck.correct : answerCheck.incorrect}`}/>
		</div>
    )
}

export default AnswerCheck;