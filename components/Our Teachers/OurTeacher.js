import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const OurTeacher = ({ teacher }) => {
  const { _id, name, image, qualification, details } = teacher;
  return (
    <div className="card bg-base-100 shadow-xl max-h-[500px] border-[#58cc02] border-2">
  {/* <figure className="px-10 pt-10"> */}
  <div className="avatar flex justify-center items-center mt-5">
  <div className="w-32 rounded-full">
    <img src={image} alt={name}/>
  </div>
</div>
  {/* </figure> */}
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-featherBold">{name}</h2>
    <p>{qualification}</p>
    <div className="card-actions">
    </div>
     <Link href={`/ourteacher/${_id}`}> <button className="btn bg-[#58cc02] border-none w-full gap-3 hover:scale-90 animation-200">View Details <FaArrowRight className=""></FaArrowRight></button></Link>
  </div>
</div>

  );
};

export default OurTeacher;
