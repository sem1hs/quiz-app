import React, { useEffect } from "react";

const Timer = ({ dispatch, seconds }) => {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "sec" });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <div className="w-max bg-slate-900 text-white py-1 px-4 font-semibold tracking-wide rounded-full ">
      <span>
        {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
      </span>
    </div>
  );
};

export default Timer;
