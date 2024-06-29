import React from "react";

const Answer = ({ i, clickedEl, setClickedEl, option }) => {
  return (
    <li
      className={`hover:translate-x-4 duration-500 ${
        clickedEl === i ? "translate-x-4" : ""
      }`}
      onClick={() => setClickedEl((el) => (el === i ? 0 : i))}
    >
      <button className="bg-slate-500 w-[300px] px-4 py-2 rounded-full text-left">
        {option}
      </button>
    </li>
  );
};

export default Answer;
