import Link from 'next/link';
import React from 'react';

const SingleCard = ({ course }) => {
  const { _id, title, picture, details, offer_price, price, date } = course;

  console.log(course)
  return (
    <div className="card card-compact bg-white shadow-2xl ">
      <div className="p-3  mx-auto">
        <img className="rounded-xl h-44 hover:scale-105 animation-200" src={picture} alt="Shoes" />
      </div>
      <div className="card-body pb-2">
        <h2 className="card-title lg:md:text-2xl text-xl text-[#333] font-semibold ">{title}</h2>
        <p className='text-[18px]'>{details.slice(0, 85)}...</p>
      </div>
      <div className="card-actions justify-between flex p-3 items-center pb-5">
        <div>
          <p className="text-md text-gray-300">
            <del>৳{price}</del>
          </p>
          <h2 className="text-2xl text-[#00CC17] font-bold"> ৳{offer_price}</h2>
        </div>
        <Link href={`/course/${_id}`}>
          <button className="btn bg-[#00CC17] border-none text-[#fff] text-[14px]">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
