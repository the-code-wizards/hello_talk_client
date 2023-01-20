import React, { useEffect, useState } from 'react';
import useCourses from '../../hooks/useCourses';
import { FaEdit, FaRegGem, FaTrash } from 'react-icons/fa';
import Link from 'next/link';

const AllCourses = () => {
  const [courses, loading] = useCourses();
  const [searchTerm, setSearchTerm] = useState('');

  const [filteredCourses, setFilteredCourses] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!loading) {
      setFilteredCourses(courses);
    }
  }, [courses, loading]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredData = courses.filter((course) =>
      course.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredCourses(filteredData);
  };

  const handleDelete = async (courseId) => {
    try {
      await fetch(`https://hello-talk-webserver.vercel.app/courses/${courseId}`, {
        method: 'DELETE',
      });
      // update the courses state and re-render the component
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
        <h2 className="card-title text-[#333]">All Courses</h2>

        <input
          type="search"
          placeholder="Type Course Title here"
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
              <thead className="">
                <tr>
                  <th>Course Title</th>
                  <th>Details</th>
                  <th>Offer Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              {filteredCourses.map((course) => {
                return (
                  <tbody className="" key={course?._id}>
                    <tr>
                      <td>{course?.title}</td>
                      {/* <td>{course?.picture}</td> */}
                      <td>{course?.details.slice(0, 40)}...</td>
                      <td>
                        {/* <div className="badge badge-secondary">secondary</div>
                        <div className="badge badge-accent">{blog?.package}</div> */}
                        {/* <div className="">
                          {course?.package === 'free' && (
                            <label className="badge badge-accent">Free</label>
                          )}
                          {course?.package === 'premium' && (
                            <label className="badge badge-secondary">
                              <FaRegGem className="mr-1"></FaRegGem>
                              <label htmlFor="my-blog-6">Premium</label>
                            </label>
                          )}
                        </div> */}
                        {course?.offer_price}
                      </td>
                      <td>
                        <div>
                          <Link href={`/editcourse/${course?._id}`}>
                            <label className="btn btn-accent mx-1">
                              <FaEdit />
                            </label>
                          </Link>
                          <label
                            className="btn btn-error"
                            onClick={() => handleDelete(course?._id)}
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

export default AllCourses;