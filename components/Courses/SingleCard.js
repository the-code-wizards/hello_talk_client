import Link from 'next/link';
import React from 'react';

const SingleCard = ({ course }) => {
  const { _id, title, picture, details, offer_price, price, date } = course;

  console.log(course)
  return (
    <div className="card card-compact bg-white shadow-2xl">
      <div className="p-3  mx-auto">
        <img className="rounded-xl h-44 hover:scale-105 animation-200" src={picture} alt="Shoes" />
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl text-black font-semibold uppercase">{title}</h2>
        <p className='text-lg'>{details.slice(0, 85)}...</p>
      </div>
      <div className="card-actions justify-between flex p-3 items-center">
        <div>
          <p className="text-xl text-gray-300">
            <del>৳{price}</del>
          </p>
          <h2 className="text-2xl text-[#00CC17] font-bold"> ৳{offer_price}</h2>
        </div>
        <Link href={`/course/${_id}`}>
          <button className="btn bg-[#00CC17] border-none">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
