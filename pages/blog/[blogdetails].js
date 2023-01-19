
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Link from "next/link";
const Blogdetails = () => {
  const [blogDetails, setBlogDetails] = useState([]);

  const router = useRouter();
  const blogid = router.query.blogdetails;

  const { _id, title, details, author, date, image } = blogDetails;

  useEffect(() => {
    fetch(`https://hello-talk-webserver.vercel.app/blogs/${blogid}`)
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, [blogid]);

  return (
    <>
      <Navbar></Navbar>
      <div className="md:max-w-[1240px] mx-auto md:p-20 p-3">
        <div className="hero-content flex-col lg:flex-row">
          <figure className="pb-4">
            <img src={image} alt="blog" className="rounded-xl" />
          </figure>
          <div>
            <h2 className="card-title text-[#58cc02] text-2xl">{title}</h2>
            <p>{details}</p>
            <div class="flex items-center py-2">
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
                  <p className="text-sm">{date}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center py-2 mx-3">
              <Link href={`/blogs/${_id}`}>
                <FaArrowLeft></FaArrowLeft>
              </Link>
              <h3 className="text-xl px-3">Go To Home</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogdetails;
