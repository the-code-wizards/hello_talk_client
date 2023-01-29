import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
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

  // const handleDelete = async (userId) => {
  //   try {
  //     await fetch(`https://hello-talk-webserver.vercel.app/profile/${userId}`, {
  //       method: 'DELETE',
  //     });
  //     // update the courses state and re-render the component
  //     // ...
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     location.reload(true);
  //   }
  // };

  return (
    <div className="md:pt-[5rem] pt-3">
      <div className="card-body" style={{ width: '100%' }}>
        <h2 className="card-title text-[#333]">All Teachers</h2>

        <input
          type="search"
          placeholder="Type teacher's name here"
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
                <tr className="bg-[#ddd] text-black">
                  <th className="text-start">Name</th>
                  <th>Qualification</th>
                  <th>Details</th>
                  <th>Action</th>
                </tr>
              </thead>
              {filteredUsers.map((teacher) => {
                return (
                  <tbody className="text-center" key={teacher?._id}>
                    <tr>
                      <td className="text-start">{teacher?.name}</td>
                      <td>{teacher?.qualification}</td>
                      <td>{teacher?.details}</td>

                      <td>
                        <div className="flex items-center gap-x-1">
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
