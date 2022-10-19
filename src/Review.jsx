import React, { useState } from "react";
import people from "./data";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const nextPerson = () => setIndex(checkNumber(index + 1));
  const prevPerson = () => setIndex(checkNumber(index - 1));

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkNumber(randomNumber));
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-60" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center items-center">
        <span className="pr-4 cursor-pointer hover:scale-125 duration-150">
          <FaChevronLeft onClick={prevPerson} />
        </span>
        <job className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-center font-semibold text-gray-700 mr-2 mb-2">
          {job}
        </job>
        <span className="pl-3 cursor-pointer hover:scale-125 duration-150">
          <FaChevronRight onClick={nextPerson} />
        </span>
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={randomPerson}
          className="border-none bg-zinc-900 text-white px-3 rounded-lg my-4 hover:scale-110 duration-200"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Review;
