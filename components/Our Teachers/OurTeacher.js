import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const OurTeacher = ({ teacher }) => {
  const { _id, name, image, qualification } = teacher;
  return (
    // <Card>
    <div className="flex md:flex-row flex-col items-center gap-2 rounded-xl shadow-xl hover:shadow-2xl p-10">
      <div className="avatar">
        <div className="w-24  rounded-full">
          <img src={image} />
        </div>
      </div>
      {/* <div className="flex items-end justify-start">
        <img
          src={image}
          className="lg:md:rounded-l-lg rounded-lg object-cover lg:md:h-40 lg:md:w-40 w-full lg:md:p-0 p-4"
          alt="teacher-img"
        />
      </div> */}
      <div className="flex-1 px-5">
        <div className="">
          <h2 className="font-bold lg:md:text-2xl text-xl text-[#58cc02]">
            {name}
          </h2>
          <p className="text-[15px]">{qualification}</p>
        </div>
        <div className="flex justify-end items-center py-2 mx-3">
          <Link className="flex items-center" href={`/ourteacher/${_id}`}>
          <p className="px-3">Details</p>
            <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
    // </Card>
  );
};

export default OurTeacher;
