import React, { useState } from 'react';
import { questionPropsType } from './../Types/quiz_types';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    alignItemsAndJustifyContent: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))
const QuestionCard: React.FC<questionPropsType> = ({ question, option, buttonText, callback }) => {
    let [selectedAns, setSelectedAnd] = useState("");
    let [buttonDisabled, setButtonDisabled] = useState(true);

    const classes = useStyles();

    const handleSelection = (ev: any) => {
        setButtonDisabled(false);
        setSelectedAnd(ev.target.value);
    }
    const handleSubmit = (e: React.FormEvent<EventTarget>, selectedAns: string) => {
        e.preventDefault();
        setButtonDisabled(true)

        callback(e, selectedAns)
    }
    return (
        <div className={classes.alignItemsAndJustifyContent}>
            <Grid container justify="center" >
                <Grid item xs={10} md={6}>
                    <div className="question-container">
                        <div>
                            <h4>{question}</h4>
                        </div>
                        <form onSubmit={(e: React.FormEvent<EventTarget>) => handleSubmit(e, selectedAns)}
                            className="question-form">
                            {
                                option.map((opt: string, ind: number) => {
                                    return (
                                        <div key={ind}>
                                            <label className="radio">
                                                <input type="radio" name="opt" value={opt} onChange={handleSelection} required checked={selectedAns === opt} />
                                                {opt}
                                            </label>
                                        </div>
                                    )
                                })
                            }
                            <Button type="submit" fullWidth variant="contained" color="primary" disabled={buttonDisabled}><strong>{buttonText}</strong></Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default QuestionCard;