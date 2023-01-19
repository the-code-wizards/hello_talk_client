import Link from "next/link";
import React, { useState } from "react";

const BlogsCard = ({ blog }) => {
  const { _id, title, details, author, date, image } = blog;
  return (
    <div className="flex md:flex-row flex-col items-center gap-3 rounded-xl shadow-md hover:shadow-2xl">
      <div className="flex items-end justify-start">
        <img
          src={image}
          className="rounded-l-lg object-cover h-80 w-60"
          alt="blog-img"
        />
      </div>
      <div className="flex-1 px-5">
        <span className="badge">Badge</span>
        <h2 className="font-bold  lg:md:text-2xl text-xl text-[#58cc02]">
          {title}
        </h2>
        <div>
          <div className="flex items-center py-2">
            <div className="flex">
              <div className="avatar mr-5">
                <div className="w-12 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div>
                <p className="font-medium capitalize text-black mt-2">
                  {author}
                </p>
                <p className="text-sm">Date</p>
              </div>
            </div>
          </div>
          <p>{details.slice(0, 60)}</p>
        </div>
        <div className="flex items-end justify-end">
          <Link href={`/blog/${_id}`}>
            <button className=" bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] my-3 py-[6px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px]  hover:bg-[#61E002]">
              Read
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
