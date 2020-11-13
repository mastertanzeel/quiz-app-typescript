import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizdetails } from './services/quiz-service';
import { QuestionType } from './Types/quiz_types';

import QuestionCard from './COmponents/QuestionCard';

function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentStep, setCurrentStep] = useState(0)
  let [score, setscore] = useState(0)
  let [showResult, setShowResult] = useState(false)
  let [correctAns, setCorrectAns] = useState(" ")
  useEffect(() => {
    async function fetchdata() {
      const questions: QuestionType[] = await getQuizdetails(5, 'easy');
      setQuiz(questions)
    }
    fetchdata();
  }, [])

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentQuestion: QuestionType = quiz[currentStep];
    if (userAns === currentQuestion.correct_answer) {
      setscore(++score);
    }

    if (userAns !== currentQuestion.correct_answer) {
      setCorrectAns(currentQuestion.correct_answer);
    }
    console.log(correctAns)

    if (currentStep !== quiz.length - 1)
      setCurrentStep(++currentStep);
    else {
      setShowResult(true);
      ;
    }


  }



  if (!quiz.length)
    return <img src='./Gif/loading' alt="loading"></img>


  if (showResult) {
    return (<div className="result-container">

      <p>{correctAns}</p>
      <p className="result-text">Yor Final Score is <b>{score}</b> out of <b>{quiz.length}</b></p>

    </div>)
  }



  return (
    <div className="App">



      <h1>Quizier</h1>

      <h3 className="heading">{currentStep + 1}/{quiz.length}</h3>

      <QuestionCard
        option={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}


      />
      <button onClick={() => setCurrentStep(0)} className="button">Restart</button>


    </div>

  );
}

export default App;
