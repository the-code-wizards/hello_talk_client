import React, { useEffect, useState } from 'react';
import useUsers from '../../hooks/useUsers';
import { FaTrash } from 'react-icons/fa';

const Admins = () => {
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

  const handleDelete = async (userId) => {
    try {
      await fetch(`https://hello-talk-webserver.vercel.app/profile/${userId}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error(error);
    } finally {
      location.reload(true);
    }
  };

  return (
    <div className="md:pt-[5rem] pt-3">
      <div className="card-body" style={{ width: '100%' }}>
        <h2 className="card-title text-[#333]">All Admins</h2>

        <input
          type="search"
          placeholder="Type User Name here"
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
                  <th className="text-start">User Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Country</th>
                  <th>Action</th>
                </tr>
              </thead>
              {filteredUsers.map((user) => {
                return (
                  <tbody className="text-center" key={user?._id}>
                    {user?.role === 'admin' ? (
                      <tr>
                        <td className="text-start">{user?.name}</td>
                        <td>{user?.email}</td>
                        <td>{user?.number}</td>
                        <td>{user?.country}</td>
                        <td>
                          <label
                            className="btn bg-[#eb3131] text-[#fff] border-none btn-sm"
                            onClick={() => handleDelete(user?._id)}
                          >
                            <FaTrash />
                          </label>
                        </td>
                      </tr>
                    ) : (
                      <></>
                    )}
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

export default Admins;
