import React from "react";

export type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionType = {
  question: string;
  answer: string;
  option: string[];
  correct_answer: string;
};

export type questionPropsType = {
  question: string;
  option: string[];
  buttonText: string;
  callback: (e: React.FormEvent<EventTarget>, ans: string) => void;
};
export type quizProps = {
  questionsNo: number;
  criteria: string;
  difficulty: string;
  callback: (e: React.FormEvent<EventTarget>) => void;

};export type criteriaProps = {
  callback: (criteria: string, difficulty: string, questions: number) => void;

};
