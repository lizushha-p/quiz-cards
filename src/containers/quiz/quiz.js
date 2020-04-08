import React, { Component } from 'react';
import './quiz.css'
import ActiveQuiz from '../../components/active-quiz/active-quiz'

class Quiz extends Component{
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz:[
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        id: 1,
        answers:[
          { text: 'Черный', id: 1},
          { text: 'Синий', id: 2},
          { text: 'Красный', id: 3},
          { text: 'Желтый', id: 4}
        ]
      },
      {
        question: 'Какого цвета елка?',
        rightAnswerId: 4,
        id: 2,
        answers:[
          { text: 'Желтый', id: 1},
          { text: 'Белый', id: 2},
          { text: 'Красный', id: 3},
          { text: 'Зеленый', id: 4}
        ]
      }
    ]
  }

  isQuizFinished(){
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  onAnswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion]

    if(question.rightAnswerId === answerId) {

      this.setState({
        answerState: {[answerId]: 'success'}
      })

      const timeout = window.setTimeout(()=>{
        if(this.isQuizFinished()){
          console.log('finished')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1
          })
        }
        window.clearTimeout(timeout)
      },1000)
    } else {
        this.setState({
          answerState: {[answerId]: 'error'}
        })
    }
  }

  render(){
    return(
      <div className='Quiz'>
        <div className='QuizWrapper'>
          <h1>Дайте ответ на следующие вопросы</h1>
          <ActiveQuiz 
            question = {this.state.quiz[this.state.activeQuestion].question}
            answers = {this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick = {this.onAnswerClickHandler}
            quizLength = {this.state.quiz.length}
            quizNumber = {this.state.activeQuestion + 1}
            state = {this.state.answerState}
          />
        </div>
      </div>
    )
  }
}

export default Quiz