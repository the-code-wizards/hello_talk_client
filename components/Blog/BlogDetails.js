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
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
