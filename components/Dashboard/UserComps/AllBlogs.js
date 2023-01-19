import React, { useEffect, useState } from 'react';
import useBlogs from '../../hooks/useBlogs';
import { FaEdit, FaTrash } from 'react-icons/fa';

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
      });
      // update the blogs state and re-render the component
      // ...
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="md:pt-[5rem] pt-3">
      <div className="card-body" style={{ width: '100%' }}>
        <h2 className="card-title text-[#333]">All Blog</h2>

        <input
          type="search"
          placeholder="Type here"
          className="input input-bordered"
          style={{ width: '50%' }}
          onChange={handleSearch}
          value={searchTerm}
        />

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table" style={{ width: '100%' }}>
              <thead className='text-center'>
                <tr>
                  <th>Blog Title</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              {filteredBlogs.map((blog) => {
                return (
                  <tbody className='text-center' key={blog?._id}>
                    <tr>
                      <td>{blog?.title}</td>
                      <td>{blog?.author}</td>
                      <td>
                        <div className="badge badge-secondary">secondary</div>
                        <div className="badge badge-accent">{blog?.package}</div>
                      </td>
                      <td>
                        <div>
                          <label className="btn btn-accent mx-1"><FaEdit/></label>
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
