import React, { useEffect, useState } from 'react';
import useCourses from '../../hooks/useCourses';
import { FaEdit, FaRegGem, FaTrash } from 'react-icons/fa';
import Link from 'next/link';

const CoursesBought = () => {
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
      await fetch(`https://hello-talk-webserver.vercel.app/course/${courseId}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
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
    <div className="md:pt-[5rem] pt-[4.5rem]  ">
      <div className="card-body" style={{ width: '100%' }}>
        <h2 className="card-title text-[#1d4d87]">Course Revenue</h2>
        <input
          type="search"
          placeholder="Type Course Title here"
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
                  <th className="text-start border-r-2 border-white">Course Title</th>
                  <th className="text-center border-r-2 border-white">Total Sold</th>
                  <th className="text-center border-r-2 border-white">Offer Price</th>
                  <th className="text-center border-r-2 border-white">Total Revenue</th>
                </tr>
              </thead>
              {filteredCourses.map((course) => {
                return (
                  <tbody className="text-left" key={course?._id}>
                    <tr className="bg-[#d7d5ff] text-[#1d4d87]">
                      <td className="text-start border-r-2 border-b-2 border-white">
                        {course?.title}
                      </td>
                      {/* <td>{course?.picture}</td> */}
                      <td className="text-center border-r-2 border-b-2 border-white">2</td>
                      <td className="text-center border-r-2 border-b-2 border-white">
                        {course?.offer_price}
                      </td>
                      <td className="text-center border-r-2 border-b-2 border-white">
                        {2 * course?.offer_price}
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

export default CoursesBought;
