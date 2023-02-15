import Link from "next/link";
import React, { Fragment } from "react";
import { FaRegGem } from "react-icons/fa";
import swal from 'sweetalert';
const BlogsCard = ({ blog, singleUser }) => {

  console.log(singleUser)
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
  // const { gems } = singleUser;
  // console.log(tag);
  console.log(blog?.gems)
  const buyBlog = () => {
    if (singleUser?.gems < 3) {
      Swal.fire({
        icon: 'error',
        text: "You dont have enough gems",
        title: 'OOOPS',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      const newGem = {
        mGem: singleUser?.gems - 3
      };
      console.log(singleUser?.gems)
      console.log(gems)
      console.log(newGem)
      fetch(`http://localhost:5000/updategem?email=${singleUser?.email}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newGem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.result.acknowledged === true) {
            window.location.href = `/blog/${_id}`
          }
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  return (
    <div className="flex md:flex-row flex-col items-center gap-2 rounded-xl shadow-md hover:shadow-2xl">
      <div className="flex items-end justify-start">
        <img
          src={image}
          className="lg:md:rounded-l-lg rounded-lg object-cover lg:md:h-40 lg:md:w-40 w-full lg:md:p-0 p-4"
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
            {title.slice(0, 15)}...
          </h2>
          <p className="text-[15px]">{details.slice(0, 60)}...</p>
        </div>
        <div className="flex items-end justify-end">
          {my_package === "free" && (
            <Link href={`/blog/${_id}`}>
              <button className="cursor-pointer bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] my-3 py-[6px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px]  hover:bg-[#61E002]">
                Read
              </button>
            </Link>
          )}
          {my_package === "premium" && (
            <button className="cursor-pointer bg-[#58cc02] flex items-center border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] my-3 py-[6px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px]  hover:bg-[#61E002] flex items-center">
              <label htmlFor="my-blog-6">
                <span className="mr-2 flex items-center ">
                  <span className="mr-2 flex items-center "><FaRegGem className="mr-1"></FaRegGem>
                    {gems}</span>
                  Unlock
                </span></label>
            </button>
          )}
        </div>
        <input type="checkbox" id="my-blog-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle ">
          <div className="modal-box p-6 bg-[#c7ebc4]">
            {/* <span className="mr-2 flex items-center text-black">
              <FaRegGem className="mr-1"></FaRegGem>
            </span>
            <p> {gems}</p> */}
            <h3 className="font-bold text-[#61B800] text-2xl">{title}</h3>
            <p className="py-4 text-lg">Are you sure you wanna use your gem to unlock this?</p>
            <div className="modal-action ">
              <button onClick={() => buyBlog()} className="bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] my-3 py-[6px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px]  hover:bg-[#61E002]">
                Buy Now
              </button>
              <label
                htmlFor="my-blog-6"
                className="bg-red-400 border-[#cf4343] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] my-3 py-[6px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px]  hover:bg-[#cf4343]"
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