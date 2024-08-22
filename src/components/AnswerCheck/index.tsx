import React from "react";
import { answerCheck } from '../../context/quizUtils';
import {type Category} from '../../context/quizUtils'

interface Props {
    category: Category;
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