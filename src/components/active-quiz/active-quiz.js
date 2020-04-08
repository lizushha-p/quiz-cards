import React from 'react'
import './active-quiz.css'
import AnswersList from './answer-list/answer-list'

const ActiveQuiz = props => (
  <div className='ActiveQuiz'>
    <p className='Question'>
      <span>
        <strong>{props.quizNumber}.</strong>&nbsp;
        { props.question }
      </span>
      <small>{props.quizNumber} из {props.quizLength}</small>
    </p>

    <AnswersList 
      answers = {props.answers}
      onAnswerClick = {props.onAnswerClick}
      state = {props.state}
    />
  </div>
)

export default ActiveQuiz