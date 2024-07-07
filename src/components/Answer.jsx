import React from "react";

const Answer = ({ i, option, dispatch, currentQuestion }) => {
  const hasClicked = currentQuestion.yourOption === i - 1;

  function handleClick(e) {
    let yourOption = i - 1;
    if (currentQuestion.yourOption === i - 1) yourOption = null;
    const ans = { ...currentQuestion, yourOption };
    dispatch({ type: "setOption", payload: ans });
  }
  return (
    <li
      className={`hover:translate-x-4 duration-500 ${
        hasClicked ? "translate-x-4" : ""
      }`}
      onClick={handleClick}
    >
      <button
        className={`bg-slate-${
          hasClicked ? "900" : "500"
        } w-max px-4 py-2 rounded-full`}
      >
        {option}
      </button>
    </li>
  );
};

export default Answer;
