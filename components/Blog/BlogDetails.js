import React, { useEffect, useState } from 'react';

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState({});

  const { _id, title, details, author, date, image } = blogDetails;

  useEffect(() => {
    fetch(`https://hello-talk-webserver.vercel.app/blogs/63beeb618675bb2721136f2c`)
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, []);
  return (
    <div className="md:max-w-[1240px] mx-auto md:p-20 p-3">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <figure className="px-10 pt-10">
            <img src={image} alt="blog" className="rounded-xl" />
          </figure>
          <p>{details}</p>
          <div className="text-start">
            <p className="font-semibold uppercase">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
