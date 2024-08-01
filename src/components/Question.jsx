import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Answer from "./Answer";
import Button from "./Button";
import { useQuestion } from "../context/QuestionContext";
import { useNavigate, useSearchParams } from "react-router-dom";

const Question = () => {
  const { state } = useQuestion();
  const { questions } = state;
  const [searchParams, setSearchParams] = useSearchParams();

  const index = +searchParams.get("id");
  const currentQuestion = questions[index];
  const navigate = useNavigate();

  return (
    <div className="mt-8">
      <div className="flex items-center">
        <h1 className="text-gray-200 text-2xl font-bold tracking-wide">
          {currentQuestion.question}
        </h1>
        <button
          className="bg-slate-900 text-white py-1 px-4 font-semibold tracking-wide rounded-full flex items-center gap-1 ml-auto"
          onClick={() => navigate("/")}
        >
          <i className="inline-block">
            <FaArrowLeft></FaArrowLeft>
          </i>
          <span>Main Menu</span>
        </button>
      </div>
      <ul className="text-white px-2 font-semibold mt-4 flex flex-col gap-3">
        {Array.from({ length: 4 }, (val, i) => (
          <Answer
            i={i - 1}
            key={i}
            currentQuestion={currentQuestion}
            option={currentQuestion.options[i]}
          ></Answer>
        ))}
      </ul>
      <div className="mt-6 flex">
        {index > 0 && <Button type="prev">Prev</Button>}
        {index === questions.length - 1 && (
          <Button type="finish">Finish</Button>
        )}
        {index !== questions.length - 1 && <Button type="next">Next</Button>}
      </div>
    </div>
  );
};

export default Question;
