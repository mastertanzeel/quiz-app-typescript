import React, { useState } from "react";
import Quiz from "./pages/quiz";
import "./App.css";
import Criteria from "./pages/criteria"
import Heart from "./assets/heart.png"
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
      <div className="footer"><h4>Made with <img src={Heart} height="17px" width="20px"  alt=""/> by <strong><a href="https://devtanzeel.web.app" rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }}>TANZEEL UR REHMAN</a></strong>.</h4></div>
    </div>
  );
}

export default App;
