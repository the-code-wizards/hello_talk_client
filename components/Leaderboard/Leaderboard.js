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

  users.sort((a, b) => a?.gems - b?.gems);
  // console.log(users)
  // users?.map((user) => (
  //    user?.gems.sort(function (a, b) { return a - b })
  // ))
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
                    <div className="font-bold">Afnan Ferdousi</div>
                  </div>
                </td>
                <th className="bg-[#fff] text-green-400">afnanferdousi550@gmail.com</th>
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
                console.log(user?.email);
                return (
                  <>
                    <tr className="bg-[#edffdf] border-none text-[#333] shadow-lg">
                      <td className="bg-[#edffdf] border-none text-[#333]">
                        {user?.name ? user?.name : user?.email}
                      </td>
                      <td className="bg-[#edffdf] border-none text-[#333]">{user?.email}</td>
                      <td className="bg-[#edffdf] border-none text-[#333]">1</td>
                      <td className="bg-[#edffdf] border-none text-[#333]">165</td>
                    </tr>
                  </>
                )
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
