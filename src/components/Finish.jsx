import React from "react";

const Finish = ({ dispatch, point }) => {
  return (
    <div className="w-max m-auto pt-8">
      <p className="text-white text-xl font-bold tracking-wide ">
        Your Score Is : {point} / 100
      </p>
      <button
        onClick={() => {
          dispatch({ type: "restart" });
        }}
        className="bg-slate-500 text-white px-4 py-1 rounded-full font-bold tracking-wide mt-4 mx-auto block"
      >
        Again
      </button>
    </div>
  );
};

export default Finish;
