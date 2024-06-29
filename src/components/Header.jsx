import React from "react";

const Header = () => {
  return (
    <div className="w-[800px] h-[250px] mx-auto p-4">
      <h1 className="text-white text-4xl font-bold mb-4 text-center">
        Welcome To Quiz App V1
      </h1>
      <div className="flex flex-col items-center mt-16">
        <p className="text-white text-lg font-bold tracking-wide">
          Let's get started
        </p>
        <button className="bg-slate-500 text-white px-4 py-2 rounded-full font-bold tracking-wide mt-2">
          Click here for start
        </button>
      </div>
    </div>
  );
};

export default Header;