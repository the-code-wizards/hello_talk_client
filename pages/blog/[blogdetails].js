import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Head from 'next/head';

const Blogdetails = () => {

    
    const [blogDetails, setBlogDetails] = useState({});

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
        <Head><title>{title}</title></Head>
        <div className="md:max-w-[1240px] mx-auto md:p-20 p-3">
      <div className="card bg-base-100 shadow-xl w-1/3">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <figure className=" pt-10">
            <img src={image} alt="blog" className="rounded-xl" />
          </figure>
          <p>{details}</p>
          <div className="text-start">
            <p className="font-semibold uppercase">{author}</p>
          </div>
        </div>
      </div>
    </div>
        </>
    );
};

export default Blogdetails;