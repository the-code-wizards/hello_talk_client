import React, { useEffect, useState } from 'react';
import useUsers from '../../hooks/useUsers';
import { FaTrash } from 'react-icons/fa';

const AllUsers = () => {
  const [users, loading] = useUsers();
  const [searchTerm, setSearchTerm] = useState('');

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!loading) {
      setFilteredUsers(users);
    }
  }, [users, loading]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredData = users.filter((user) =>
      user?.name?.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };

  const [loader, setLoader] = useState(false);

  const handleAdmin = (userId) => {
    setLoader(true);

    fetch(`https://hello-talk-webserver.vercel.app/makeadmin?email=${userId}`, {
      method: 'PUT',
      headers: {
        'content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setLoader(false);
        alert('Make admin successful');
        location.reload(true);
      });
  };

  const handleDelete = async (userId) => {
    try {
      await fetch(`https://hello-talk-webserver.vercel.app/profile/${userId}`, {
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
    <div className="md:pt-[5rem] pt-[4.5rem]  ">
      <div className="card-body">
        <h2 className="card-title text-[#1d4d87]">All Users</h2>

        <input
          type="search"
          placeholder="Type User Name here"
          className="input bg-[#d7d5ff]"
          style={{ width: '50%' }}
          onChange={handleSearch}
          value={searchTerm}
        />

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="overflow-x-auto my-2 shadow-2xl rounded md:w-full">
            <table className="table-compact md:w-full">
              <thead className="text-center">
                <tr className="bg-[#1d4d87] text-white">
                  <th className="text-start border-r-2 border-white">User Name</th>
                  <th className="text-start border-r-2 border-white">Email</th>
                  <th className="text-center border-r-2 border-white">Role</th>
                  <th className="text-center border-r-2 border-white">Mobile Number</th>
                  <th className="text-center border-r-2 border-white">Country</th>
                  <th>Action</th>
                </tr>
              </thead>
              {filteredUsers.map((user) => {
                return (
                  <tbody className="text-center" key={user?._id}>
                    <tr className="bg-[#d7d5ff] text-[#1d4d87]">
                      <td className="text-start border-r-2 border-b-2 border-white">
                        {user?.name}
                      </td>
                      <td className="text-start border-r-2 border-b-2 border-white">
                        {user?.email}
                      </td>
                      <td className="text-center border-r-2 border-b-2 border-white">
                        {user?.role}
                      </td>
                      <td className="text-center border-r-2 border-b-2 border-white">
                        {user?.number}
                      </td>
                      <td className="text-center border-r-2 border-b-2 border-white">
                        {user?.country}
                      </td>
                      <td className="text-center border-r-2 border-b-2 border-white">
                        <div className="flex items-center justify-center gap-x-1">
                          {!loading ? (
                            <>
                              {user?.role === 'admin' ? (
                                <button
                                  className="bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] my-3 py-[6px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px]  hover:bg-[#61E002] btn border-none btn-sm"
                                  disabled
                                >
                                  Admin
                                </button>
                              ) : (
                                <button
                                  className="bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] my-3 py-[6px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px]  hover:bg-[#61E002] border-none btn-sm"
                                  onClick={() => handleAdmin(user?.email)}
                                >
                                  Admin
                                </button>
                              )}
                            </>
                          ) : (
                            <button className="btn bg-[#20d720] text-[#fff] border-none btn-sm">
                              Loading...
                            </button>
                          )}
                          <label
                            className="btn bg-[#eb3131] text-[#fff] border-none btn-sm"
                            onClick={() => handleDelete(user?._id)}
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

export default AllUsers;
