import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import useTeachers from '../../hooks/useTeachers';

const AllTeachers = () => {
  const [teachers, loading] = useTeachers();
  const [searchTerm, setSearchTerm] = useState('');

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!loading) {
      setFilteredUsers(teachers);
    }
  }, [teachers, loading]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredData = teachers.filter((user) =>
      user?.name?.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };

  const [loader, setLoader] = useState(false);

  const handleDelete = async (userId) => {
    try {
      await fetch(`https://hello-talk-webserver.vercel.app/removeteacher?id=${userId}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {});
    } catch (error) {
      console.error(error);
    } finally {
      location.reload(true);
    }
  };

  return (
    <div className="md:pt-[5rem] pt-[4.5rem]  ">
      <div className="card-body" style={{ width: '100%' }}>
        <h2 className="card-title text-[#1d4d87]">All Teachers</h2>

        <input
          type="search"
          placeholder="Type teacher's name here"
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
                <tr className="bg-[#1d4d87]  text-white">
                  <th className="text-start border-r-2 border-white">Name</th>
                  <th className="text-start border-r-2 border-white">Qualification</th>
                  {/* <th className="text-start border-r-2 border-white">Details</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              {filteredUsers.map((teacher) => {
                return (
                  <tbody className="text-center" key={teacher?._id}>
                    <tr className="bg-[#d7d5ff] text-[#1d4d87]">
                      <td className="text-start border-r-2 border-b-2 border-white">
                        {teacher?.name}
                      </td>
                      <td className="text-start border-r-2 border-b-2 border-white">
                        {teacher?.qualification}
                      </td>
                      {/* <td className="text-start border-r-2 border-b-2 border-white">
                        {teacher?.details}
                      </td> */}

                      <td className="border-b-2 border-white">
                        <div className="items-center">
                          <Link href={`/editteacher/${teacher?._id}`}>
                            <label className="btn bg-[#20d720] text-[#fff] border-none btn-sm mx-1 my-2">
                              <FaEdit />
                            </label>
                          </Link>
                          <label
                            className="btn bg-[#eb3131] text-[#fff] border-none btn-sm"
                            onClick={() => handleDelete(teacher?._id)}
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

export default AllTeachers;
