import Link from 'next/link';
import React from 'react';

const BlogsCard = ({ blog }) => {
  const { _id, title, details, author, date, image } = blog;
  return (
    <div className="flex md:flex-row flex-col items-center gap-3 rounded-xl shadow-md hover:shadow-2xl p-3">
      <div className="flex items-end justify-end">
        <img src={image} className="rounded-xl object-cover h-52 w-60" alt="blog-img" />
      </div>
      <div className="flex-1">
        <h2 className="font-bold  lg:md:text-2xl text-xl text-[#58cc02]">{title}</h2>
        <div>
          <p className="font-medium uppercase text-black mt-2">{author}</p>
          <p>{details.slice(0, 60)}</p>
        </div>
        <div className="flex items-end justify-end">
          <Link href={`/blog/${_id}`}>
            <button className=" bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] mt-6 py-[6px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px]  hover:bg-[#61E002]">
              Read
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
