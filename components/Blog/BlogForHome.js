import React from "react";
import BlogsCard from "./BlogsCard";
import { useEffect, useState } from "react";

const BlogForHome = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://hello-talk-webserver.vercel.app/hblogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="md:max-w-[1240px] mx-auto md:p-10 p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogs.map((blog) => (
            <BlogsCard key={blog._id} blog={blog}></BlogsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogForHome;
