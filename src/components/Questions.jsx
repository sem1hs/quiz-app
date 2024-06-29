import React from "react";
import Question from "./Question";

const Questions = ({ questions, dispatch, index }) => {
  return (
    <div className="w-[800px] mx-auto">
      <h1 className="text-white text-4xl font-bold text-center">
        X / Y Question
      </h1>
      <Question
        questions={questions}
        dispatch={dispatch}
        index={index}
      ></Question>
    </div>
  );
};

export default Questions;
