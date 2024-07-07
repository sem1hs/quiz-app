import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Answer from "./Answer";

const Question = ({ questions, dispatch, index }) => {
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
          currentQuestion={currentQuestion}
          option={currentQuestion.options[0]}
          dispatch={dispatch}
        ></Answer>
        <Answer
          i={2}
          currentQuestion={currentQuestion}
          option={currentQuestion.options[1]}
          dispatch={dispatch}
        ></Answer>
        <Answer
          i={3}
          currentQuestion={currentQuestion}
          option={currentQuestion.options[2]}
          dispatch={dispatch}
        ></Answer>
        <Answer
          i={4}
          currentQuestion={currentQuestion}
          option={currentQuestion.options[3]}
          dispatch={dispatch}
        ></Answer>
      </ul>
      <div className="mt-6 flex">
        {index !== 0 && (
          <button
            className="bg-slate-900 text-white py-1 px-4 font-semibold tracking-wide rounded-full flex items-center gap-1 ml-[520px]"
            onClick={() => {
              dispatch({ type: "prevQuestion" });
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
