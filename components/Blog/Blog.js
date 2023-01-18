import React, { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [activeIndex, setActiveIndex] = useState(-1);

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  //   const filteredData = blogs.filter((faq) =>
  //     faq.question.toLowerCase().includes(event.target.value.toLowerCase())
  //   );
  //   setBlogs(blogs);
  // };

  // const handleClick = (index) => {
  //   setActiveIndex(index === activeIndex ? -1 : index);
  // };
  useEffect(() => {
    fetch("https://hello-talk-webserver.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div className="relative justify-center my-10 mx-32 rounded-md shadow-sm text-center">
        <input
          type="search"
          className="form-input px-10 py-3 block w-full transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 rounded-xl focus:outline-none focus:shadow-outline-blue focus:border-[#61B800]  focus:z-10 text-xl leading-5"
          placeholder="Type Your Blogs Here"
          // onChange={handleSearch}
          // value={searchInput}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 pr-3 flex items-center px-2 text-gray-500"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="md:max-w-[1240px] mx-auto md:p-20 p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogs.map((blog) => (
            <BlogsCard key={blog._id} blog={blog}></BlogsCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
