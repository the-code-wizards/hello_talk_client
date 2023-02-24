import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const OurTeacher = ({ teacher }) => {
  const { _id, name, image, qualification, details } = teacher;
  return (
    <div className="card bg-[#f7fde9] border-[#58cc02] border-2 shadow-xl">
  {/* <figure className="px-10 pt-10"> */}
  <div className="avatar flex justify-center items-center mt-5">
  <div className="w-32 rounded-full">
    <img src={image} alt={name}/>
  </div>
</div>
  {/* </figure> */}
  <div className="card-body items-center text-center">
        <h2 className="text-2xl font-featherBold capitalize text-[#342d2d]">{name}</h2>
    <p>Qualification: <span className="font-semibold">{qualification}</span></p>
    <div className="card-actions">
    </div>
        <Link href={`/ourteacher/${_id}`}> <button className="bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] px-3 flex gap-x-2 hover:bg-[#61E002] animation-200 items-center">View Details <FaArrowRight className=""></FaArrowRight></button></Link>
  </div>
</div>

  );
};

export default OurTeacher;
