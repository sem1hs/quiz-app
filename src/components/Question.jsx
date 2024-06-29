import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Question = () => {
  const [clickedEl, setClickedEl] = useState(0);

  return (
    <div className="mt-8">
      <h1 className="text-gray-200 text-2xl font-bold tracking-wide">Soru</h1>
      <ul className="text-white px-2 font-semibold mt-4 flex flex-col gap-3">
        <li
          className={`hover:translate-x-4 duration-500 ${
            clickedEl === 1 ? "translate-x-4" : ""
          }`}
          onClick={() => setClickedEl(1)}
        >
          <button className="bg-slate-500 w-[300px] px-4 py-2 rounded-full text-left">
            Answer 1
          </button>
        </li>
        <li
          className={`hover:translate-x-4 duration-500 ${
            clickedEl === 2 ? "translate-x-4" : ""
          }`}
          onClick={() => setClickedEl(2)}
        >
          <button className="bg-slate-500 w-[300px] px-4 py-2 rounded-full text-left">
            Answer 1
          </button>
        </li>
        <li
          className={`hover:translate-x-4 duration-500 ${
            clickedEl === 3 ? "translate-x-4" : ""
          }`}
          onClick={() => setClickedEl(3)}
        >
          <button className="bg-slate-500 w-[300px] px-4 py-2 rounded-full text-left">
            Answer 1
          </button>
        </li>
        <li
          className={`hover:translate-x-4 duration-500 ${
            clickedEl === 4 ? "translate-x-4" : ""
          }`}
          onClick={() => setClickedEl(4)}
        >
          <button className="bg-slate-500 w-[300px] px-4 py-2 rounded-full text-left">
            Answer 1
          </button>
        </li>
      </ul>
      <div className="mt-6 flex">
        <button className="bg-green-600 text-white py-1 px-4 font-semibold tracking-wide rounded-full block">
          Onayla
        </button>
        <button className="bg-slate-900 text-white py-1 px-4 font-semibold tracking-wide rounded-full flex items-center gap-1 ml-auto">
          <span>Diğer Soru </span>
          <i className="inline-block">
            <FaArrowRight></FaArrowRight>
          </i>
        </button>
      </div>
    </div>
  );
};

export default Question;
