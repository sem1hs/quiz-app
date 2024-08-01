import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuestion } from "../context/QuestionContext";

const Header = () => {
  const { state } = useQuestion();
  const { questions } = state;

  const navigate = useNavigate();
  return (
    <div className="w-[800px] h-[250px] mx-auto p-32">
      <h1 className="text-white text-4xl font-bold mb-4 text-center">
        Welcome To Quiz App V1
      </h1>
      <div className="flex flex-col items-center mt-16">
        <p className="text-white text-lg font-bold tracking-wide">
          Let's get started
        </p>
        <button
          onClick={() => navigate(`questions?id=${questions[0].id}`)}
          className="bg-slate-500 text-white px-4 py-2 rounded-full font-bold tracking-wide mt-2"
        >
          Click here to start
        </button>
      </div>
      <p className="text-white w-max m-auto opacity-50 font-bold tracking-wide mt-64">
        Copyright (c) 2024 Semih Şahinoğlu
      </p>
    </div>
  );
};

export default Header;
