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
          console.log(data);
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
    <div className="md:pt-[5rem] pt-3">
      <div className="card-body" style={{ width: '100%' }}>
        <h2 className="card-title text-[#333]">All Blogs</h2>
        <input
          type="search"
          placeholder="Type Blog Title here"
          className="input bg-white input-bordered"
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
                <tr className="bg-[#ddd]">
                  <th className="text-start">Blog Title</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              {filteredBlogs.map((blog) => {
                return (
                  <tbody className="text-center" key={blog?._id}>
                    <tr>
                      <td className="text-start">{blog?.title}</td>
                      <td>{blog?.author_name}</td>
                      <td>
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
                      <td>
                        <div>
                          <Link href={`/editblog/${blog?._id}`}>
                            <label className="btn btn-accent mx-1">
                              <FaEdit />
                            </label>
                          </Link>
                          <label className="btn btn-error" onClick={() => handleDelete(blog?._id)}>
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
