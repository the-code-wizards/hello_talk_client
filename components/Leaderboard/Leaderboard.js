import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    axios.get(`https://hello-talk-webserver.vercel.app/allusers`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(users)
  return (
    <>
      {/*------------------ Leaderboard data api theke data call kore map korte hbe ------------ */}

      <div className="max-w-[1240px] mx-auto px-8">
        {/*----------------- User's position --------------*/}
        <div className=" w-full my-5">
          <table className="bg-white table w-full text-center">
            {/* <!-- head --> */}
            <thead className="bg-white">
              <tr>
                <th className="bg-[#58cc02] text-[#fff]">Name</th>
                <th className="bg-[#58cc02] text-[#fff]">Email</th>
                <th className="bg-[#58cc02] text-[#fff]">Your Position</th>
                <th className="bg-[#58cc02] text-[#fff]">Gems</th>
              </tr>
            </thead>
            <tbody >
              {/* <!-- row 1 --> */}
              <tr>
                <td className="bg-[#fff] text-green-400">
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </td>
                <th className="bg-[#fff] text-green-400">1</th>
                <th className="bg-[#fff] text-green-400">1</th>
                <td className="bg-[#fff] text-green-400">165</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*------------------- Top 5 members are here ---------------------*/}

        <div className=" w-full my-5">
          <table className="bg-white table w-full text-center">
            {/* <!-- head --> */}
            <thead>
              <tr className="bg-[#ddf3a1] text-[#58cc02]">
                <th>Name</th>
                <th>Email</th>
                <th>Your Position</th>
                <th>Gems</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => {
                console.log(user);
                <tr className="bg-beige text-[#333]">
                  <td>
                      {user?.name}               
                  </td>
                  <td> {user?.email}</td>
                  <td>1</td>
                  <td>165</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>

        {/*-------------------- Other members are here --------------------*/}

      </div>
    </>
  );
};

export default Leaderboard;
