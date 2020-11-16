import React, { useState } from "react";
import {
  MenuItem,
  Typography,
  Slider,
  Button,
  Grid,
  TextField,
} from "@material-ui/core";

import { criteriaProps } from "../Types/quiz_types";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  marginAutoContainer: {
    width: 500,
    height: 80,
    display: "flex",
    backgroundColor: "gold",
  },
  marginAutoItem: {
    margin: "auto",
  },
  alignItemsAndJustifyContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Criteria: React.FC<criteriaProps> = ({ callback }) => {
  const [criteria, setCriteria] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState(5);
  const classes = useStyles();

  return (
    <div className={classes.alignItemsAndJustifyContent}>
      <Grid container justify="center">
        <Grid item xs={10} md={8} style={{ marginTop: "30px" }}>
            <h1>Quiz Guru</h1>
            <h4 style={{textAlign: 'left'}}>Configure your quiz:</h4>
          <TextField
            value={criteria}
            onChange={(event) => setCriteria(event.target.value as string)}
            label="Category"
            variant="outlined"
            fullWidth
            select
          >
            <MenuItem>Any</MenuItem>
            <MenuItem value="9">General Knowledge</MenuItem>
            <MenuItem value="10">Entertainment: Books</MenuItem>
            <MenuItem value="11">Entertainment: Film</MenuItem>
            <MenuItem value="12">Entertainment: Music</MenuItem>
            <MenuItem value="13">
              Entertainment: Musicals &amp; Theatres
            </MenuItem>
            <MenuItem value="14">Entertainment: Television</MenuItem>
            <MenuItem value="15">Entertainment: Video Games</MenuItem>
            <MenuItem value="16">Entertainment: Board Games</MenuItem>
            <MenuItem value="17">Science &amp; Nature</MenuItem>
            <MenuItem value="18">Science: Computers</MenuItem>
            <MenuItem value="19">Science: Mathematics</MenuItem>
            <MenuItem value="20">Mythology</MenuItem>
            <MenuItem value="21">Sports</MenuItem>
            <MenuItem value="22">Geography</MenuItem>
            <MenuItem value="23">History</MenuItem>
            <MenuItem value="24">Politics</MenuItem>
            <MenuItem value="25">Art</MenuItem>
            <MenuItem value="26">Celebrities</MenuItem>
            <MenuItem value="27">Animals</MenuItem>
            <MenuItem value="28">Vehicles</MenuItem>
            <MenuItem value="29">Entertainment: Comics</MenuItem>
            <MenuItem value="30">Science: Gadgets</MenuItem>
            <MenuItem value="31">
              Entertainment: Japanese Anime &amp; Manga
            </MenuItem>
            <MenuItem value="32">
              Entertainment: Cartoon &amp; Animations
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={10} md={8} style={{ marginTop: "30px" }}>
          <TextField
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value as string)}
            label="Difficulty"
            variant="outlined"
            select
            fullWidth
          >
            <MenuItem>Any</MenuItem>
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={10} md={8} style={{ marginTop: "30px" }}>
          <Typography gutterBottom>Number of questions:</Typography>
          <Slider
            defaultValue={questions}
            aria-labelledby="discrete-slider-always"
            step={1}
            onChange={(event, value) => setQuestions(value as number)}
            valueLabelDisplay="on"
            max={50}
            min={0}
          />
        </Grid>
        <Grid item xs={10} md={8} style={{ marginTop: "30px" }}>
          <Button
            variant="contained"
            onClick={() => callback(criteria, difficulty, questions)}
            fullWidth
            color="primary"
          >
            <strong>START</strong>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default Criteria;
