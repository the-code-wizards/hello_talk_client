import Link from "next/link";
import React, { Fragment } from "react";
import { FaRegGem } from "react-icons/fa";
const BlogsCard = ({ blog }) => {
  const {
    _id,
    title,
    details,
    date,
    author_name,
    author_img,
    image,
    tag,
    gems,
    package: my_package,
  } = blog;
  // console.log(tag);
  return (
    <div className="flex md:flex-row flex-col items-center gap-2 rounded-xl shadow-md hover:shadow-2xl">
      <div className="flex items-end justify-start">
        <img
          src={image}
          className="rounded-l-lg object-cover h-40 w-40"
          alt="blog-img"
        />
      </div>
      <div className="flex-1 px-5">
        <div className="">
          {/* <span className="badge">Badge</span> */}
          <>
          {tag?.map((ta) => {
            <Fragment>#{ta}</Fragment>;
          })}
        </>
          <h2 className="font-bold lg:md:text-2xl text-xl text-[#58cc02]">
            {title}
          </h2>
          <p className="text-[15px]">{details.slice(0, 60)}...</p>
        </div>
        <div className="flex items-end justify-end">
          {my_package === "free" && (
            <Link href={`/blog/${_id}`}>
              <button className=" bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] my-3 py-[6px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px]  hover:bg-[#61E002]">
                Read
              </button>
            </Link>
          )}
          {my_package === "premium" && (
            <button className=" bg-[#58cc02] flex items-center border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] my-3 py-[6px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px]  hover:bg-[#61E002]">
              <span className="mr-2 flex items-center">
                <FaRegGem className="mr-1"></FaRegGem>
                {gems}
              </span>{" "}
              <label htmlFor="my-blog-6">Unlock</label>
            </button>
          )}
        </div>
        <input type="checkbox" id="my-blog-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box p-6">
            {/* <span className="mr-2 flex items-center text-black">
              <FaRegGem className="mr-1"></FaRegGem>
            </span>
            <p> {gems}</p> */}
            <h3 className="font-bold text-[#61B800] text-2xl">{title}</h3>
            <p className="py-4">{details}</p>
            <div className="modal-action">
              <button className="bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] my-3 py-[6px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px]  hover:bg-[#61E002]">
                Buy Now
              </button>
              <label
                htmlFor="my-blog-6"
                className="bg-black border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] my-3 py-[6px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px]"
              >
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BlogsCard;