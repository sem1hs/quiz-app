import React, { useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuestion } from "../context/QuestionContext";

const Button = ({ type, children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state } = useQuestion();
  const { questions } = state;
  const id = +searchParams.get("id");
  const navigate = useNavigate();

  return (
    <>
      {type === "next" && (
        <button
          className="bg-slate-900 text-white py-1 px-4 font-semibold tracking-wide rounded-full flex items-center gap-1 ml-auto"
          onClick={() => {
            if (id < questions.length - 1) navigate(`/questions?id=${id + 1}`);
          }}
        >
          <span>{children}</span>
          <i className="inline-block">
            <FaArrowRight></FaArrowRight>
          </i>
        </button>
      )}
      {type === "prev" && (
        <button
          className="bg-slate-900 text-white py-1 px-4 font-semibold tracking-wide rounded-full flex items-center gap-1 ml-[600px]"
          onClick={() => navigate(`/questions?id=${id - 1}`)}
        >
          <i className="inline-block">
            <FaArrowLeft></FaArrowLeft>
          </i>
          <span>{children}</span>
        </button>
      )}
      {type === "finish" && (
        <button className="bg-slate-900 text-white py-1 px-4 font-semibold tracking-wide rounded-full flex items-center gap-1 ml-auto">
          <span>{children}</span>
        </button>
      )}
    </>
  );
};

export default Button;
