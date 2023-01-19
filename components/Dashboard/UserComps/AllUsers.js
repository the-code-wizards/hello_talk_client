import React, { useEffect, useState } from 'react';
import useUsers from '../../hooks/useUsers';
import { FaEdit, FaRegGem, FaTrash } from 'react-icons/fa';
import Link from 'next/link';

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
    <div className="md:pt-[5rem] pt-3">
      <div className="card-body" style={{ width: '100%' }}>
        <h2 className="card-title text-[#333]">All Users</h2>

        <input
          type="search"
          placeholder="Type User Name here"
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
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Country</th>
                  <th>Action</th>
                </tr>
              </thead>
              {filteredUsers.map((user) => {
                return (
                  <tbody key={user?._id}>
                    <tr>
                      <td>{user?.name}</td>
                      <td>{user?.email}</td>
                      <td>{user?.number}</td>
                      <td>{user?.country}</td>
                      <td>
                        <div>
                          <label className="btn btn-error" onClick={() => handleDelete(user?._id)}>
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
