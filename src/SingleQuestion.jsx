import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="w-full flex justify-center items-center">
      <header className="w-5/6 my-3 flex flex-col items-center justify-around border rounded-sm shadow-xl">

        <div className="w-full bg-gray-200 flex justify-between items-center">
          <h3 className="text-lg ml-4 mt-1">{title}</h3>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="bg-zinc-700 mr-8 w-5 h-5 flex items-center justify-center text-rose-600 rounded-full"
          >
            {showInfo ? (
              <AiOutlineMinus size={15} />
            ) : (
              <AiOutlinePlus size={15} />
            )}
          </button>
        </div>

        <div className="text-center">
          {showInfo ? (
            <p className="text-xs p-2">{info}</p>
          ) : (
            ""
          )}
        </div>
      </header>
    </article>
  );
};

export default SingleQuestion;
