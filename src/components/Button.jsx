import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useQuestion } from "../context/QuestionContext";

const Button = ({ status, children }) => {
  const { dispatch } = useQuestion();
  return (
    <button
      className="bg-slate-900 text-white py-1 px-4 font-semibold tracking-wide rounded-full flex items-center gap-1 ml-auto"
      onClick={() => {
        dispatch({ type: status === "Next" ? "nextQuestion" : "finish" });
      }}
    >
      <span>{children}</span>
      {status === "Next" && (
        <i className="inline-block">
          <FaArrowRight></FaArrowRight>
        </i>
      )}
    </button>
  );
};

export default Button;
