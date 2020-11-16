import React, { useEffect, useState } from "react"
import { getQuizdetails } from '../services/quiz-service';
import { QuestionType, quizProps } from '../Types/quiz_types';
import Loader from "../assets/loader1.gif"
import QuestionCard from '../Components/QuestionCard';
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    alignItemsAndJustifyContent: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))
const Quiz: React.FC<quizProps> = ({ questionsNo, difficulty, criteria, callback }) => {

    let [quiz, setQuiz] = useState<QuestionType[]>([])
    let [currentStep, setCurrentStep] = useState(0)
    let [score, setscore] = useState(0)
    let [showResult, setShowResult] = useState(false)
    let [buttonText, setButtonText] = useState("Next")

    const classes = useStyles();

    useEffect(() => {
        async function fetchdata() {
            const questions: QuestionType[] = await getQuizdetails(questionsNo, difficulty, criteria);
            setQuiz(questions)
        }
        fetchdata();
    }, [questionsNo, difficulty, criteria])

    const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
        currentStep !== quiz.length - 2 ? setButtonText("Next") : setButtonText("Submit")
        const currentQuestion: QuestionType = quiz[currentStep];
        if (userAns === currentQuestion.correct_answer) {
            setscore(++score);
        }

        if (currentStep !== quiz.length - 1)
            setCurrentStep(++currentStep);
        else {
            setShowResult(true);
        }
    }
    if (!quiz.length) {
        return (<div style={{ textAlign: 'center' }}>
            <img src={Loader} alt="loading" height="50%" style={{ marginTop: window.innerWidth > 720 ? '100px' : '60%' }} width='50%' />
        </div>)
    }
    if (showResult) {
        return (<div className={classes.alignItemsAndJustifyContent}>
            <Grid container justify="center" >
                <Grid item xs={10} md={6}><div className="result-container">
                    <h3 style={{ color: score / quiz.length * 100 >= 70 ? "green" : "red" }}>{score / quiz.length * 100 > 70 ? "Congratulations! You passed." : "Sorry! Better luck next time."}</h3>
                    <p className="result-text">Yor Final Score is <b>{score}</b> out of <b>{quiz.length}</b></p>
                </div>
                    <br />
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={callback}
                    >
                        <strong>Attemp Again</strong>
                    </Button></Grid> </Grid></div>)
    }

    return (
        <div>
            <h1><strong>Quiz Guru</strong></h1>
            <h3 className="heading">{currentStep + 1}/{quiz.length}</h3>
            <QuestionCard
                option={quiz[currentStep].option}
                question={quiz[currentStep].question}
                buttonText={buttonText}
                callback={handleSubmit}
            />
        </div>
    )
}
export default Quiz;

