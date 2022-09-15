import React from "react";
import { IoArrowRedoOutline } from "react-icons/io5";
import { AiOutlineBell, AiOutlineStar, AiFillStar } from "react-icons/ai";

const DetailTokenIcons = () => {
  return (
    <div className="flex justify-center lg:justify-start text-lg space-x-3 lg:text-xl">
      <button className="w-12 lg:w-14 flex justify-center py-2 rounded-lg border border-solid border-gray-300">
        <IoArrowRedoOutline />
      </button>
      <button className="w-12 flex justify-center py-2 rounded-lg border border-solid border-gray-400">
        <AiOutlineBell />
      </button>
      <button className="w-12 flex justify-center py-2 rounded-lg border border-solid border-gray-400">
        <AiOutlineStar />
      </button>
      <div className="flex justify-center items-center bg-gray-300 rounded-lg text-black space-x-2 px-1">
        <AiFillStar className="text-sm text-yellow-400" />
        <p className="text-sm">1,134,590 people like this</p>
      </div>
    </div>
  );
};

export default DetailTokenIcons;
