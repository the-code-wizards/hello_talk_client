import React, { useEffect, useState } from "react";
import Loader from "../Shared/Loader";
import BlogsCard from "./BlogsCard";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [loading, setLoading] = useState(true)

  const handleSearch = (event) => {
    if (event?.target?.value !== " ") {
      setLoading(true)
      setSearchValue(event.target.value);
      setLoading(false)
    }
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setBlogs(filtered);
  };
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  useEffect(() => {
    setLoading(true)
    fetch("https://hello-talk-webserver.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data)
        setLoading(false)
      });
  }, []);

  return (
    <>
      <div className="relative justify-center mt-10 lg:md:mx-64 mx-8 rounded-md shadow-sm text-center">
        <input
          type="search"
          className="form-input px-5 py-2 block w-full transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 placeholder:text-[18px] rounded-md focus:outline-none focus:shadow-outline-blue focus:border-[#61B800]  focus:z-10 text-xl leading-5"
          placeholder="Blog title"
          value={searchValue}
          onChange={handleSearch}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 pr-3 flex items-center px-2 text-gray-500"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="md:max-w-[1240px] mx-auto md:p-20 p-3">
        {loading ? <Loader /> : <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogs.map((blog) => (
            <BlogsCard key={blog._id} blog={blog}></BlogsCard>
          ))}
        </div>}
      </div>
    </>
  );
};

export default Blog;
