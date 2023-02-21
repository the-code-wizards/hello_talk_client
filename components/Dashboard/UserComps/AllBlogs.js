import React, { useEffect, useState } from 'react';
import useBlogs from '../../hooks/useBlogs';
import { FaEdit, FaRegGem, FaTrash } from 'react-icons/fa';
import Link from 'next/link';

const AllBlogs = () => {
  const [blogs, loading] = useBlogs();
  const [searchTerm, setSearchTerm] = useState('');

  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!loading) {
      setFilteredBlogs(blogs);
    }
  }, [blogs, loading]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredData = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredBlogs(filteredData);
  };

  const handleDelete = async (blogId) => {
    try {
      await fetch(`https://hello-talk-webserver.vercel.app/blogs/${blogId}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
        });
      // update the blogs state and re-render the component
      // ...
    } catch (error) {
      console.error(error);
    } finally {
      location.reload(true);
    }
  };

  return (
    <div className="md:pt-[5rem] pt-[4.5rem]  ">
      <div className="card-body" style={{ width: '100%' }}>
        <h2 className="card-title text-[#1d4d87]">All Blogs</h2>
        <input
          type="search"
          placeholder="Type Blog Title here"
          className="input bg-[#d7d5ff]"
          style={{ width: '50%' }}
          onChange={handleSearch}
          value={searchTerm}
        />

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="overflow-x-auto my-2 shadow-2xl rounded">
            <table className="table-normal" style={{ width: '100%' }}>
              <thead className="text-center">
                <tr className="bg-[#1d4d87] text-white">
                  <th className="text-start border-r-2 border-white">Blog Title</th>
                  <th className="text-start border-r-2 border-white">Author</th>
                  <th className="text-center border-r-2 border-white">Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              {filteredBlogs.map((blog) => {
                return (
                  <tbody className="text-center" key={blog?._id}>
                    <tr className="bg-[#d7d5ff] text-[#1d4d87]">
                      <td className="text-start border-r-2 border-b-2 border-white">
                        {blog?.title}
                      </td>
                      <td className="text-start border-r-2 border-b-2 border-white">
                        {blog?.author_name}
                      </td>
                      <td className="text-center border-r-2 border-b-2 border-white">
                        {/* <div className="badge badge-secondary">secondary</div>
                        <div className="badge badge-accent">{blog?.package}</div> */}
                        <div className="">
                          {blog?.package === 'free' && (
                            <label className="badge badge-accent">Free</label>
                          )}
                          {blog?.package === 'premium' && (
                            <label className="badge badge-secondary">
                              <FaRegGem className="mr-1"></FaRegGem>
                              <label htmlFor="my-blog-6">Premium</label>
                            </label>
                          )}
                        </div>
                      </td>
                      <td className="text-center border-r-2 border-b-2 border-white">
                        <div>
                          <Link href={`/editblog/${blog?._id}`}>
                            <label className="btn bg-[#20d720] text-[#fff] border-none btn-sm mx-1 my-2">
                              <FaEdit />
                            </label>
                          </Link>
                          <label
                            className="btn bg-[#eb3131] text-[#fff] border-none btn-sm"
                            onClick={() => handleDelete(blog?._id)}
                          >
                            <FaTrash />
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
