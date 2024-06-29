import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Answer from "./Answer";

const Question = ({ questions, dispatch, index }) => {
  const [clickedEl, setClickedEl] = useState(0);
  const currentQuestion = questions[index];

  return (
    <div className="mt-8">
      <div className="flex items-center">
        <h1 className="text-gray-200 text-2xl font-bold tracking-wide">
          {currentQuestion.question}
        </h1>
        <button
          className="bg-slate-900 text-white py-1 px-4 font-semibold tracking-wide rounded-full flex items-center gap-1 ml-auto"
          onClick={() => dispatch({ type: "page", payload: "main" })}
        >
          <i className="inline-block">
            <FaArrowLeft></FaArrowLeft>
          </i>
          <span>Main Menu</span>
        </button>
      </div>
      <ul className="text-white px-2 font-semibold mt-4 flex flex-col gap-3">
        <Answer
          i={1}
          clickedEl={clickedEl}
          setClickedEl={setClickedEl}
          option={currentQuestion.options[0]}
        ></Answer>
        <Answer
          i={2}
          clickedEl={clickedEl}
          setClickedEl={setClickedEl}
          option={currentQuestion.options[1]}
        ></Answer>
        <Answer
          i={3}
          clickedEl={clickedEl}
          setClickedEl={setClickedEl}
          option={currentQuestion.options[2]}
        ></Answer>
        <Answer
          i={4}
          clickedEl={clickedEl}
          setClickedEl={setClickedEl}
          option={currentQuestion.options[3]}
        ></Answer>
      </ul>
      <div className="mt-6 flex">
        <button className="bg-green-600 text-white py-1 px-4 font-semibold tracking-wide rounded-full block">
          Approve
        </button>
        {index !== 0 && (
          <button
            className="bg-slate-900 text-white py-1 px-4 font-semibold tracking-wide rounded-full flex items-center gap-1 ml-[520px]"
            onClick={() => {
              dispatch({ type: "prevQuestion" });
              setClickedEl(0);
            }}
          >
            <span>Prev</span>
            <i className="inline-block">
              <FaArrowLeft></FaArrowLeft>
            </i>
          </button>
        )}
        <button
          className="bg-slate-900 text-white py-1 px-4 font-semibold tracking-wide rounded-full flex items-center gap-1 ml-auto"
          onClick={() => {
            dispatch({ type: "nextQuestion" });
            setClickedEl(0);
          }}
        >
          <span>Next</span>
          <i className="inline-block">
            <FaArrowRight></FaArrowRight>
          </i>
        </button>
      </div>
    </div>
  );
};

export default Question;
