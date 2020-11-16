import React, { useState } from "react";
import Quiz from "./pages/quiz";
import "./App.css";
import Criteria from "./pages/criteria"


function App() {
  const [criteria, setCriteria] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState(5);
  const [startQuiz, setStartQuiz] = useState(false);

  const handleClick = (quizCriteria: string, quizDifficulty: string, quizQuestions: number) => {
    setCriteria(quizCriteria)
    setDifficulty(quizDifficulty)
    setQuestions(quizQuestions)
    setStartQuiz(true)
  }
  const callback = () => setStartQuiz(false)

  return (
    <div className="App">
      {startQuiz === false ? <Criteria callback={handleClick} /> :
        <Quiz criteria={criteria} difficulty={difficulty} callback={callback} questionsNo={questions} />}
    </div>
  );
}

export default App;
