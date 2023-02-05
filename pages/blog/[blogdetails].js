import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Link from "next/link";
import Head from "next/head";
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
      <Head>
        <title>HelloTalk - {title}</title>
      </Head>
      <Navbar></Navbar>
      <div className="card hero lg:md:min-h-screen lg:md:pt-[6rem] pt-[4rem]">
        <div className="hero-content flex-col lg:md:mx-10 mx-2 shadow-xl rounded-md ">
          <figure className="pb-4">
            <img
              src={image}
              alt="blog"
              className="rounded-xl lg:md:h-[350px]"
            />
          </figure>
          <div className="card-body lg:md:py-5 p-0">
            <h2 className="card-title text-[#58cc02] lg:md:text-2xl text-lg">
              {title}
            </h2>
            <p className="text-[16px]">{details}</p>
            <div className="flex items-center mt-4">
              <div className="flex items-center">
                <div className="avatar mr-5">
                  <div className="lg:md:w-12 w-8 h-8 rounded-full">
                    <img src={author_img} />
                  </div>
                </div>
                <div>
                  <p className="font-medium capitalize text-black mt-2 text-[16px] lg:md:text-[20px]">
                    {author_name}
                  </p>
                  <p className="lg:md:text-sm text-[12px]">{date}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center py-2 mx-3 lg:md:text-[18px] text-[16px]">
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
