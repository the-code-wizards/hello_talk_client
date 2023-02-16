import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import useSingleUser from '../hooks/useSingleUser';

const SingleCard = ({ course }) => {
  const { _id, title, picture, details, offer_price, price, date } = course;
  const [singleUser] = useSingleUser();
  const [loading, setLoading] = useState()
  const [enrolled, setEnrolled] = useState([])
  useEffect(() => {
    fetch(`https://hello-talk-webserver.vercel.app/userpayments?email=${singleUser?.email}`)
      .then(res => res.json())
      .then(data => {
        setEnrolled(data)
        console.log(data);
        setLoading(false);
      })
  }, [singleUser])

  console.log(enrolled)
  console.log(singleUser)

  const productData = enrolled?.map((single) => single?.productId);

  return (
    <div className="card card-compact bg-white shadow-2xl ">
      <div className="p-3  mx-auto">
        <img className="rounded-xl h-44 hover:scale-105 animation-200" src={picture} alt="Shoes" />
      </div>
      <div className="card-body pb-2">
        <h2 className="card-title lg:md:text-2xl text-xl text-[#333] font-semibold ">{title}</h2>
        <p className='text-[18px]'>{details?.slice(0, 85)}...</p>
      </div>
      <div className="card-actions justify-between flex p-3 items-center pb-5">
        <div>
          <p className="text-md text-gray-300">
            <del>৳{price}</del>
          </p>
          <h2 className="text-2xl text-[#00CC17] font-bold"> ৳{offer_price}</h2>
        </div>
        {productData.includes(_id) ?
          <Link href={`/course/enrolled/${_id}`}><button className="btn  bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[100%] w-[50%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] ">Enrolled</button></Link>
          :
          <Link href={`/course/${_id}`}>
            <button className="btn bg-[#00CC17] border-none text-[#fff] text-[14px]">View Details</button>
          </Link>
        }

      </div>
    </div>
  );
};

export default SingleCard;
