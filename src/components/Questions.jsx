import React from "react";
import Question from "./Question";
import Timer from "./Timer";

const Questions = ({ questions, dispatch, index, seconds }) => {
  const numQuestions = questions.length;
  return (
    <div className="w-[800px] mx-auto">
      <h1 className="text-white text-4xl font-bold text-center">
        {index + 1 + " / " + numQuestions} Question
      </h1>
      <Question
        questions={questions}
        dispatch={dispatch}
        index={index}
      ></Question>
      <Timer dispatch={dispatch} seconds={seconds}></Timer>
    </div>
  );
};

export default Questions;
