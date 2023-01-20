import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Link from "next/link";
const Blogdetails = () => {
  const [blogDetails, setBlogDetails] = useState({});

  const router = useRouter();
  const blogid = router.query.blogdetails;

  const {
    _id,
    title,
    details,
    date,
    author_name,
    author_img,
    image,
    tag,
    package: my_package,
  } = blogDetails;

  useEffect(() => {
    fetch(`https://hello-talk-webserver.vercel.app/blogs/${blogid}`)
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, [blogid]);

  return (
    <>
      <Navbar></Navbar>
      <div className="card hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row  mx-10 shadow-xl rounded-md ">
          <figure className="pb-4">
            <img src={image} alt="blog" className="rounded-xl" />
          </figure>
          <div className="card-body py-5">
            <div class="flex items-center">
              <div className="flex">
                <div className="avatar mr-5">
                  <div className="w-12 rounded-full">
                    <img src={author_img} />
                  </div>
                </div>
                <div>
                  <p className="font-medium capitalize text-black mt-2">
                    {author_name}
                  </p>
                  <p className="text-sm">{date}</p>
                </div>
              </div>
            </div>
            <h2 className="card-title text-[#58cc02] text-2xl">{title}</h2>
            <p>{details}</p>
            <div className="flex items-center py-2 mx-3">
              <Link href={`/blogs`}>
                <FaArrowLeft></FaArrowLeft>
              </Link>
              <h3 className="px-3">Go To Blog</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogdetails;
