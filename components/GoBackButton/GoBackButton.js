import React from "react";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

const GoBackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button
      className=" left-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={handleClick}
    >
      <div
        className="flex items-center py-2 mx-3 lg:md:text-[18px] text-[16px]"
        xmlns={`/HomePage`}
      >
        <FaArrowLeft></FaArrowLeft>

        <h3 className="px-3">Go To Back</h3>
      </div>
    </button>
  );
};

export default GoBackButton;
