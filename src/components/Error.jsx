import React from "react";
import { useQuestion } from "../context/QuestionContext";

const Error = () => {
  const { dispatch } = useQuestion();

  return (
    <div className="w-max m-auto pt-10">
      <p className="text-white font-bold tracking-wide text-xl">
        Something went wrong, please try again !
      </p>
      <button
        onClick={() => {
          dispatch({ type: "page", payload: "main" });
        }}
        className="bg-slate-500 text-white px-4 py-1 rounded-full font-bold tracking-wide mt-4 mx-auto block"
      >
        Main
      </button>
    </div>
  );
};

export default Error;
