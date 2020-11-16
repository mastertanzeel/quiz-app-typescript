import React, { useState } from "react";
import Quiz from "./pages/quiz";
import "./App.css";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Slider,
  Tooltip,
} from "@material-ui/core";

function App() {
  const [criteria, setCriteria] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState("");

  return (
    <div className="App">
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">
          Select Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={criteria}
          onChange={(event) => setCriteria(event.target.value as string)}
          label="Age"
        >
          <MenuItem>Any</MenuItem>
          <MenuItem value="9">General Knowledge</MenuItem>
          <MenuItem value="10">Entertainment: Books</MenuItem>
          <MenuItem value="11">Entertainment: Film</MenuItem>
          <MenuItem value="12">Entertainment: Music</MenuItem>
          <MenuItem value="13">Entertainment: Musicals &amp; Theatres</MenuItem>
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
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">
          Select Difficulty
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value as string)}
          label="type"
        >
          <MenuItem>Any</MenuItem>
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </FormControl>
      <Typography gutterBottom>Tooltip value label</Typography>
      <Slider
        defaultValue={20}
        aria-labelledby="discrete-slider-always"
        step={1}
        onChange={(event, value) => localStorage.setItem(questions, value)}
        valueLabelDisplay="on"
      />

      <Quiz />
    </div>
  );
}

export default App;
