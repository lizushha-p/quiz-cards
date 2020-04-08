import React from 'react';
import './answer-list.css'; 
import AnswerItem from './answer-item/answer-item';

const AnswersList = props => (
  <ul className = 'AnswersList'>
    {props.answers.map((answer, index) => (
      <AnswerItem 
      key = {index}
      answer = {answer}
      onAnswerClick = {props.onAnswerClick}
      state = {props.state ? props.state[answer.id]:null}
      />))
    }   
  </ul>
)

export default AnswersList