import React from "react";
import Question from "./Question";
import Timer from "./Timer";
import { useQuestion } from "../context/QuestionContext";

const Questions = () => {
  const { state } = useQuestion();
  const { questions, index } = state;

  const numQuestions = questions.length;
  return (
    <div className="w-[800px] mx-auto mt-16">
      <h1 className="text-white text-4xl font-bold text-center">
        {index + 1 + " / " + numQuestions} Question
      </h1>
      <Question></Question>
      <Timer></Timer>
    </div>
  );
};

export default Questions;
